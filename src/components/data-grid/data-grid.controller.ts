import { IDataGridService, GridDataSource, PageSearchQuery, GridOptions } from './data-grid';

export class DataGridController implements ng.IComponentController {

    public provider: Object;
    public options: GridOptions;
    public title: string;
    public source: GridDataSource;
    private pageSearchQuery: PageSearchQuery;

    constructor(
        private DataGridService: IDataGridService,
        private _: _.LoDashStatic
    ) {
        'ngInject';

        // Setup paigination
        this.pageSearchQuery = {
            paginationOptions: {
                pageSize: 10,
                pageNumber: 1
            }
        };

        // Load grid
        this.loadGrid();
    }

    private performPagination = (newPage: number, pageSize: number): void => {
        this.pageSearchQuery.paginationOptions.pageNumber = newPage;
        this.pageSearchQuery.paginationOptions.pageSize = pageSize;
        this.loadGrid();
    };

    private loadGrid = (): void => {
        this.DataGridService.loadData(this.source.url, this.pageSearchQuery).then(this.populateGrid);
    }

    private populateGrid = (options: GridOptions): void => {
        this.options = options;
        this.options.appScopeProvider = this.provider;
        this.options.paginationPageSize = this.pageSearchQuery.paginationOptions.pageSize;

        if (this.source.additionalOptions) {
            // Merge model with the mapped object
            this._.merge(this.options, this.source.additionalOptions);
        }

        this.options.onRegisterApi = (gridApi: any): void => {
            gridApi.pagination.on.paginationChanged(null, this.performPagination);
        };

        // Transform grid opitons into ui-grid specific
        this.DataGridService.transformGridOptions(this.options);

        // Get the title for the page
        this.title = this.DataGridService.getTranslatedValue(this.options.title);

        // Transform column defs in ui-grid specific
        if (this.options.columnDefs) {
            this.DataGridService.transformColumns(this.options.columnDefs);
        }
    };
}

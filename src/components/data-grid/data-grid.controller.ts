import { IDataGridService, GridOptions } from './data-grid';

export class DataGridController implements ng.IComponentController {

    public options: GridOptions;
    public provider: Object;
    public title: string;

    constructor(
        private DataGridService: IDataGridService
    ) {
        'ngInject';

        this.options.appScopeProvider = this.provider;

        // Transform grid opitons into ui-grid specific
        DataGridService.transformGridOptions(this.options);

        // Get the title for the page
        this.title = DataGridService.getTranslatedValue(this.options.title);

        // Transform column defs in ui-grid specific
        if (this.options.columnDefs) {
            DataGridService.transformColumns(this.options.columnDefs);
        }
    }
}

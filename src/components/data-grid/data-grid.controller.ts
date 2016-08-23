import { IDataGridService, GridOptions } from './data-grid';

export class DataGridController implements ng.IComponentController {

    public options: GridOptions;
    public provider: Object;
    public title: string;

    constructor(
        private DataGridService: IDataGridService,
        private uiGridConstants: uiGrid.IUiGridConstants) {
        'ngInject';

         // Default values
        this.options.enableHorizontalScrollbar = uiGridConstants.scrollbars.NEVER;
        this.options.enableVerticalScrollbar = uiGridConstants.scrollbars.NEVER;
        this.options.showGridFooter = true;
        this.options.enableFiltering = true;

        this.options.appScopeProvider = this.provider;

        // Get the title for the page
        this.title = DataGridService.getTranslatedValue(this.options.title);

        // Transform column defs in ui-grid specific
        if (this.options.columnDefs) {
            DataGridService.transformColumns(this.options.columnDefs);
        }
    }
}

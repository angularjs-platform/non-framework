import { IDataGridService, GridColumn, ButtonOptions, GridOptions, PageSearchQuery, GridDataSource } from './data-grid';

export class DataGridService implements IDataGridService {

    private iconsByType: any = {
        view: 'eye',
        edit: 'pencil',
        delete: 'delete'
    };

    constructor(
        private uiGridConstants: uiGrid.IUiGridConstants,
        private $http: ng.IHttpService
    ) {
        'ngInject';
    }

    public transformColumns = (columns: GridColumn[]): void => {

        columns.forEach((column: GridColumn): void => {

            // Get translated name
            column.headerCellFilter = 'translate';

            // Remove the hiding option from column menu
            column.enableHiding = false;

            // Transform into html template
            if (column.type === 'button') {
                column.cellTemplate = this.buildButtonTemplate(column.options);
                column.enableSorting = false;
                column.enableColumnMenu = false;
            }
        });
    };

    public transformGridOptions = (options: GridOptions): void => {
        // Default values
        options.enableHorizontalScrollbar = this.uiGridConstants.scrollbars.NEVER;
        options.enableVerticalScrollbar = this.uiGridConstants.scrollbars.NEVER;
        options.enableRowSelection = false;
        options.enableRowHeaderSelection = false;
        options.paginationPageSizes = [10, 25, 50];
        options.enableFiltering = false;
        options.useExternalPagination = true;

        if (options.gridType === 'selectable') {
            options.enableRowSelection = true;
            options.enableFullRowSelection = true;
            options.multiSelect = false;

            let selectAction: string = 'selectRow';
            if (options.selectAction) {
                selectAction = options.selectAction;
            }
            options.onRegisterApi = (gridApi: any): void => {
                // TODO: Seems wierd to pass null but it needs a scope.. passing 'this' is throwing error... :(
                gridApi.selection.on.rowSelectionChanged(null, options.appScopeProvider[selectAction]);
            };
        }

        if (options.gridType === 'multiSelect') {
            options.enableRowSelection = true;
            options.enableRowHeaderSelection = true;
            options.multiSelect = true;
        }

        if (options.footerButtons && options.footerButtons.length > 0) {
            options.showGridFooter = true;
            options.gridFooterTemplate = this.buildFooterButtonTemplate(options.footerButtons);
        }
    };

    public loadData = (url: string, query: PageSearchQuery): ng.IPromise<any> => {
        return this.$http.post(url, {pageSearchQuery: query}).then(this.handleData);
    };

    public submitData = (url: string, data: any): ng.IPromise<any> => {
        return this.$http.post(url, {ids: data}).then(this.handleData);
    };

    public getDataSourceObject = (url: string, additionalOptions: GridOptions): GridDataSource => {
        let dataSource: GridDataSource = {};
        dataSource.url = url;

        if (additionalOptions) {
            dataSource.additionalOptions = additionalOptions;
        }

        return dataSource;
    };

    public escapeObjectForHTML = (data: Object): string => {
        return encodeURIComponent(JSON.stringify(data));
    };

    public decodeObjectForJavascript = (data: string): Object => {
        return JSON.parse(decodeURIComponent(data));
    };

    private handleData = (response: any): any => {
        return response.data;
    }

    private buildButtonTemplate = (buttonOptions: ButtonOptions[]): string => {
        let template: string = '';

        buttonOptions.forEach((option: any): any => {

            let icon: any = option.icon;

            if (!icon) {
                let type: any = option.type;

                if (type) {
                    icon = this.iconsByType[type];
                }
            }

            if (!icon) {
                icon = 'magnify';
            }

            let clickAction: any;

            if (option.action) {
                clickAction = '"grid.appScope.' + option.action + '(row.entity)"';
            }
            else if (option.stateConfig) {
                clickAction = '"grid.appScope.triggerStateChange(\'' +
                        this.escapeObjectForHTML(option.stateConfig) +
                        '\', row.entity)"';
            }
            else if (option.serviceConfig) {
                clickAction = '"grid.appScope.triggerService(\'' +
                        this.escapeObjectForHTML(option.serviceConfig) +
                        '\', row.entity)"';
            }

            template = template + ' <md-button class="md-icon-button" ng-click=' + clickAction + '> ' +
                                    '<md-icon md-svg-icon="' + icon + '" class="icon" aria-label="{{\'' +
                                    option.buttonLabel + '\' | translate }}"></md-icon></md-button> ';
        });
        return template;

    };

    private buildFooterButtonTemplate = (buttonOptions: ButtonOptions[]): string => {
        let template: string = '<div layout="row" layout-align="end top">';

        buttonOptions.forEach((option: ButtonOptions): any => {
            let clickAction: any = '"grid.appScope.' + option.action + '()"';

            if (option.multiSelectConfig) {
                clickAction = '"grid.appScope.performMultiSelect(\''
                    + this.escapeObjectForHTML(option.multiSelectConfig)
                    + '\')"';
            }

            template = template + ' <md-button class="md-primary md-raised" ng-click=' + clickAction;
            if (option.visibleFn) {
                template = template + ' ng-show="grid.appScope.' + option.visibleFn + '()"';
            }

            template = template + '>{{"' + option.buttonLabel + '" | translate }}</md-button> ';
        });
        return template + '</div>';
     };
}

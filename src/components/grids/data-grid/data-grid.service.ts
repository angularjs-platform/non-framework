import { IDataGridService, GridColumn, ButtonOptions, GridOptions, PageSearchQuery, GridDataSource, GridStateConfig, ButtonServiceConfig } from './data-grid';

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
            if (options.selectAction !== undefined) {
                selectAction = options.selectAction;
            }
            options.onRegisterApi = (gridApi: any): void => {
                // TODO: Seems wierd to pass null but it needs a scope.. passing 'this' is throwing error... :(
                gridApi.selection.on.rowSelectionChanged(null, options.appScopeProvider[selectAction]);
            };
        }

        if (options.footerButtons && options.footerButtons.length > 0) {
            options.gridFooterTemplate = this.buildFooterButtonTemplate(options.footerButtons);
        }
    };

    public loadData = (url: string, query: PageSearchQuery): ng.IPromise<any> => {

        return this.$http.post(url, {pageSearchQuery: query}).then(this.handleData);
    };

    public getDataSourceObject = (url: string, additionalOptions: GridOptions): GridDataSource => {
        let dataSource: GridDataSource = {};
        dataSource.url = url;

        if (additionalOptions !== undefined) {
            dataSource.additionalOptions = additionalOptions;
        }

        return dataSource;
    };

    private handleData = (response: any): any => {
        return response.data;
    }

    private buildButtonTemplate = (buttonOptions: ButtonOptions[]): string => {
        let template: string = '';

        buttonOptions.forEach((option: any): any => {

            let icon: any = option.icon;

            if (icon === undefined) {
                let type: any = option.type;

                if (type !== undefined) {
                    icon = this.iconsByType[type];
                }
            }

            if (icon === undefined) {
                icon = 'magnify';
            }

            let clickAction: any;

            if (option.action !== undefined) {
                clickAction = '"grid.appScope.' + option.action + '(row.entity)"';
            }
            else if (option.stateConfig !== undefined) {
                let stateConfig: GridStateConfig = option.stateConfig;
                clickAction = '"grid.appScope.triggerStateChange(\'' +
                        stateConfig.state + '\',\'' +
                        stateConfig.param + '\',\'' +
                        stateConfig.value + '\',' +
                        'row.entity)"';
            }
            else if (option.serviceConfig !== undefined) {
                let serviceConfig: ButtonServiceConfig = option.serviceConfig;
                clickAction = '"grid.appScope.triggerService(\'' +
                        serviceConfig.name + '\',\'' +
                        serviceConfig.method + '\',\'' +
                        serviceConfig.value + '\',\'' +
                        serviceConfig.successLabel + '\',' +
                        'row.entity)"';
            }

            template = template + ' <md-button class="md-icon-button" ng-click=' + clickAction + '> ' +
                                    '<md-icon md-svg-icon="' + icon + '" class="icon" aria-label="{{\'' +
                                    option.buttonLabel + '\' | translate }}"></md-icon></md-button> ';
        });
        return template;

    };

    private buildFooterButtonTemplate = (buttonOptions: ButtonOptions[]): string => {
        let template: string = '<div layout="row" layout-align="end top">';

        buttonOptions.forEach((option: any): any => {
            template = template + ' <md-button class="md-primary md-raised" ng-click="grid.appScope.' +
                                    option.action + '()"';
            if (option.visibleFn !== undefined) {
                template = template + ' ng-show="grid.appScope.' + option.visibleFn + '()"';
            }

            template = template + '>{{"' + option.buttonLabel + '" | translate }}</md-button> ';
        });
        return template + '</div>';
     };
}

import { IDataGridService, GridColumn, ButtonOptions, GridOptions, PageSearchQuery, GridDataSource } from './data-grid';

export class DataGridService implements IDataGridService {

    private iconsByType: any = {
        view: 'eye',
        edit: 'pencil',
        delete: 'delete'
    };

    constructor(
        private $translate: ng.translate.ITranslateService,
        private uiGridConstants: uiGrid.IUiGridConstants,
        private $http: ng.IHttpService
    ) {
        'ngInject';
    }

    public getTranslatedValue = (translationKey: string) => {
        return this.$translate.instant(translationKey);
    };

    public transformColumns = (columns: GridColumn[]): void => {

        columns.forEach((column: GridColumn): void => {

            // Get translated name
            column.displayName = this.getTranslatedValue(column.labelKey);

            // Remove the hiding option from column menu
            column.enableHiding = false;

            // Transform into html template
            if (column.type === 'button') {
                column.cellTemplate = this.buildButtonTemplate(column.options);
                column.enableSorting = false;
                column.enableFiltering = false;
                column.enableColumnMenu = false;
            }
        });
    };

    public transformGridOptions = (options: GridOptions): void => {
        // Default values
        options.enableHorizontalScrollbar = this.uiGridConstants.scrollbars.NEVER;
        options.enableVerticalScrollbar = this.uiGridConstants.scrollbars.NEVER;
        options.enableFiltering = true;
        options.enableRowSelection = false;
        options.enableRowHeaderSelection = false;
        options.paginationPageSizes = [10, 25, 50];
        options.useExternalPagination = true;

        if (options.gridType === 'selectable') {
            options.enableRowSelection = true;
            options.enableFullRowSelection = true;
            options.multiSelect = false;
            options.onRegisterApi = (gridApi: any): void => {
                // TODO: Seems wierd to pass null but it needs a scope.. passing 'this' is throwing error... :(
                gridApi.selection.on.rowSelectionChanged(null, options.appScopeProvider[options.selectAction]);
            };
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

            template = template + ' <md-button class="md-icon-button" ng-click="grid.appScope.' +
                                    option.action + '(row.entity)"> ' +
                                    '<md-icon md-svg-icon="' + icon + '" class="icon" aria-label=' +
                                    this.getTranslatedValue(option.buttonLabel) + '></md-icon></md-button> ';
        });
        return template;

    };
}

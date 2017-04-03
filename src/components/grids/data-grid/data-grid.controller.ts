import { IDataGridService, GridDataSource, PageSearchQuery, GridOptions, GridStateConfig, MultiSelectConfig, ButtonServiceConfig } from './data-grid';
import { FormConfiguration } from '../../components.model';
const searchFormFields: any = require('./data-grid-search.metadata.json');

export class DataGridController implements ng.IComponentController {

    public provider: Object;
    public options: GridOptions;
    public title: string;
    public source: GridDataSource;
    public searchFormConfiguration: FormConfiguration;
    public gridProvider: Object;
    private gridApi: uiGrid.IGridApi;
    private pageSearchQuery: PageSearchQuery;

    constructor(
        private $translate: ng.translate.ITranslateService,
        private $mdToast: ng.material.IToastService,
        private DataGridService: IDataGridService,
        private $state: ng.ui.IStateService,
        private _: _.LoDashStatic,
        private $injector: ng.auto.IInjectorService
    ) {
        'ngInject';

        this.searchFormConfiguration = {
            model: {},
            fields: [],
            options: {
                formState: {
                    viewManager: {
                        resetSearch: this.resetSearch
                    }
                }
            }
        };

        // Setup paigination
        this.pageSearchQuery = {
            paginationOptions: {
                pageSize: 10,
                pageNumber: 1
            }
        };

        // Setup grid provider
        this.gridProvider = {
            triggerStateChange: this.triggerStateChange,
            triggerService: this.triggerService,
            selectRow: this.selectRow,
            performMultiSelect: this.performMultiSelect
        };

        // Load grid
        this.loadGrid();
    }

    public performSearch = ($event: any, form: ng.IFormController): void => {
        this.searchFormConfiguration.options.formState.triggerFormValidation = true;
        if (form.$valid) {
            this.pageSearchQuery.searchOptions = this.searchFormConfiguration.model;
            this.loadGrid();
        }
        else {
            this.$mdToast.show(this.$mdToast.simple().textContent(this.$translate.instant('FORM.CORRECT_FORM_INPUT_ERRORS')));
        }
    };

    public resetSearch = (): void => {
       this.searchFormConfiguration.model = {};
       this.searchFormConfiguration.options.resetModel();
       this.pageSearchQuery.searchOptions = {};
    };

    public triggerStateChange = (data: string, object: any): void => {
        let stateConfig: GridStateConfig = this.DataGridService.decodeObjectForJavascript(data);
        this.changeState(stateConfig.state, stateConfig.param, stateConfig.field, object);
    };

    public triggerService = (data: string, object: any): void => {
        let serviceConfig: ButtonServiceConfig = this.DataGridService.decodeObjectForJavascript(data);
        const service: any = this.$injector.get(serviceConfig.name);

        service[serviceConfig.method](object[serviceConfig.field]).then(
            () => this.$mdToast.show(this.$mdToast.simple().textContent(this.$translate.instant(serviceConfig.successLabel))));
    };

    public selectRow = (object: any): void => {
        const stateConfig: GridStateConfig = this.options.selectConfig;
        let stateName: string;
        if (stateConfig.dynamic) {
            stateName = this.options.configData[stateConfig.configName];
        }
        else {
            stateName = stateConfig.state;
        }
        this.changeState(stateName, stateConfig.param, stateConfig.field, object.entity);
    };

    public performMultiSelect = (data: string): void => {
        let config: MultiSelectConfig = this.DataGridService.decodeObjectForJavascript(data);
        let selectedRows: any = this.gridApi.selection.getSelectedRows();
        let selectedFields: any = this._.map(selectedRows, config.field);
        this.DataGridService.submitData(config.url, selectedFields).then(
            () => {
            this.$mdToast.show(this.$mdToast.simple().textContent(this.$translate.instant(config.successLabel)));
            this.loadGrid();
        }
        );

    };

    private changeState = (state: string, param: string, field: string, object: any): void => {
        let data: any = {};
        data[param] = object[field];
        this.$state.go(state, data);
    };


    private performPagination = (newPage: number, pageSize: number): void => {
        this.pageSearchQuery.paginationOptions.pageNumber = newPage;
        this.pageSearchQuery.paginationOptions.pageSize = pageSize;
        this.loadGrid();
    };

    private loadGrid = (): void => {
        this.DataGridService.loadData(this.source.url, this.pageSearchQuery).then(this.populateGrid);
    };

    private populateGrid = (options: GridOptions): void => {

        this.options = options;
        this.options.paginationPageSize = this.pageSearchQuery.paginationOptions.pageSize;

        if (this.provider !== undefined) {
            this._.assign(this.gridProvider, this.provider);
        }
        this.options.appScopeProvider = this.gridProvider;


        if (this.source.additionalOptions) {
            // Merge model with the mapped object
            this._.merge(this.options, this.source.additionalOptions);
        }

        if (options.searchOptions) {
            // Merge fields with the searchOptions
            let searchFields: any = this._.cloneDeep(searchFormFields);

            searchFields.fieldGroup.unshift(...options.searchOptions);
            this.searchFormConfiguration.fields = [searchFields];
        }

        this.options.onRegisterApi = (gridApi: any): void => {
            this.gridApi = gridApi;
            gridApi.pagination.on.paginationChanged(null, this.performPagination);
        };

        // Transform grid opitons into ui-grid specific
        this.DataGridService.transformGridOptions(this.options);

        // Get the title for the page
        if (this.options.title) {
            this.title = this.options.title;
        }

        // Transform column defs in ui-grid specific
        if (this.options.columnDefs) {
            this.DataGridService.transformColumns(this.options.columnDefs);
        }
    };
}

import { IDataGridService, GridDataSource, PageSearchQuery, GridOptions, GridStateConfig } from './data-grid';
import { FormConfiguration } from '../../components.model';
const searchFormFields: any = require('./data-grid-search.metadata.json');

export class DataGridController implements ng.IComponentController {

    public provider: Object;
    public options: GridOptions;
    public title: string;
    public source: GridDataSource;
    public searchFormConfiguration: FormConfiguration;
    public gridProvider: Object;
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
            selectRow: this.selectRow
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

    public triggerStateChange = (state: string, param: string, value: string, object: any): void => {
        let data: any = {};
        data[param] = object[value];
        this.$state.go(state, data);
    };

    public triggerService = (name: string, method: string, value: string, successLabel: string, object: any): void => {
        const service: any = this.$injector.get(name);

        service[method](object[value]).then(
            () => this.$mdToast.show(this.$mdToast.simple().textContent(this.$translate.instant(successLabel))));
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
        this.triggerStateChange(stateName, stateConfig.param, stateConfig.value, object.entity);
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

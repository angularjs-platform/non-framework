export interface IDataGridService {
    transformGridOptions(options: GridOptions): void;
    transformColumns(columns: GridColumn[]): void;
    getTranslatedValue(translationKey: string): string;
    loadData(url: string, options: PageSearchQuery): ng.IPromise<any>;
    getDataSourceObject(url:string, additionalOptions?:GridOptions): GridDataSource;
}

export interface GridDataSource {
    url?: string;
    additionalOptions?: GridOptions;
}

export interface GridOptions extends uiGrid.IGridOptions {
    columnDefs?: GridColumn[];
    title?: string;
    gridType?: 'selectable';
    selectAction?: string;
    selectConfig?: GridStateConfig;
    searchOptions?: [Object];
    footerButtons?: ButtonOptions[];
    configData?: Object;
}

export interface GridColumn extends uiGrid.IColumnDef {
    labelKey: string;
    type?: string;
    options?: ButtonOptions[];
}

export type GridStateConfig = {
    state?: string;
    param?: string;
    value?: string;
    dynamic?: boolean;
    configName?: string;
}

export type ButtonServiceConfig = {
    name?: string;
    method?: string;
    value?: string;
    successLabel?: string;
}

export type ButtonOptions = {
    buttonLabel: string;
    action?: string;
    type?: string;
    icon?: string;
    visibleFn?: string;
    stateConfig?: GridStateConfig;
    serviceConfig?: ButtonServiceConfig;
}

export type PaginationOptions = {
    pageSize: number;
    pageNumber: number;
}

export type PageSearchQuery =  {
	paginationOptions?: PaginationOptions;
	searchOptions?: Object;
	queryParams?: {[binding: string]: string};
}

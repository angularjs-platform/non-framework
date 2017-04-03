export interface IDataGridService {
    transformGridOptions(options: GridOptions): void;
    transformColumns(columns: GridColumn[]): void;
    loadData(url: string, options: PageSearchQuery): ng.IPromise<any>;
    submitData(url: string, data: any): ng.IPromise<any>;
    getDataSourceObject(url:string, additionalOptions?:GridOptions): GridDataSource;
    escapeObjectForHTML(data: Object): string;
    decodeObjectForJavascript(data: string): Object;
}

export interface GridDataSource {
    url?: string;
    additionalOptions?: GridOptions;
}

export interface GridOptions extends uiGrid.IGridOptions {
    columnDefs?: GridColumn[];
    title?: string;
    gridType?: 'selectable' | 'multiSelect';
    selectAction?: string;
    selectConfig?: GridStateConfig;
    searchOptions?: [Object];
    footerButtons?: ButtonOptions[];
    configData?: Object;
}

export interface GridColumn extends uiGrid.IColumnDef {
    type?: string;
    options?: ButtonOptions[];
}

export type GridStateConfig = {
    state?: string;
    param?: string;
    field?: string;
    dynamic?: boolean;
    configName?: string;
}

export type ButtonServiceConfig = {
    name?: string;
    method?: string;
    field?: string;
    successLabel?: string;
}

export type MultiSelectConfig = {
    url?: string;
    field?: string;
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
    multiSelectConfig?: MultiSelectConfig;
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

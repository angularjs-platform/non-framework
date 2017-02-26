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
    searchOptions?: [Object];
    footerButtons?: ButtonOptions[];
}

export interface GridColumn extends uiGrid.IColumnDef {
    labelKey: string;
    type?: string;
    options?: ButtonOptions[];
}

export type ButtonOptions = {
    action: string;
    buttonLabel: string;
    type?: string;
    icon?: string;
    useGridCtrl?: boolean;
    visibleFn?: string;
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

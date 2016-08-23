export interface IDataGridService {
    transformColumns(columns: GridColumn[]): void;
     getTranslatedValue(translationKey: string): string;
}


export interface GridOptions extends uiGrid.IGridOptions {
    columnDefs: GridColumn[];
    title: string;
}

export interface GridColumn extends uiGrid.IColumnDef {
    labelKey: string;
    type?: string;
    options?: ButtonOptions;
}

export type ButtonOptions = {
    action: string;
    buttonLabel: string;
}

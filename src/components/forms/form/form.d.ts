export type FormConfiguration = {
    options?: AngularFormly.IFormOptionsAPI;
    model?: Object;
    fields: AngularFormly.IFieldArray;
}

export interface IFormDisplayState {
    create: string,
    update: string,
    view: string
}

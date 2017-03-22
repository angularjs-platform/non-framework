export interface IFlexiFormService {
    getFlexiFormConfig(formConfig: FlexiFormConfig[], model: Object): FlexiFormField[];
    isFieldVisible(fieldName: string, formFields: FlexiFormField[]): boolean;
    getFieldValues(fieldName: string, formFields: FlexiFormField[]): string[];
}

export type FlexiFormField = {
    name: string;
    values?: string[];
}

export type FlexiFormConfig = {
    fields: FlexiFormField[];
    [key: string]: any;
}

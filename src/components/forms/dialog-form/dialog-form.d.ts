export * from './generic-dialog-form/generic-dialog-form';
export * from './attachment-dialog-form/attachment-dialog-form';

export interface IDialogFormService {
    open(type: string, formConfig: any, formData: any) : ng.IPromise<any>;
}

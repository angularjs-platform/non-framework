import { IDialogFormService, IGenericDialogFormService, IAttachmentDialogFormService } from './dialog-form';

export class DialogFormService implements IDialogFormService {

    constructor(
        private GenericDialogFormService: IGenericDialogFormService,
        private AttachmentDialogFormService: IAttachmentDialogFormService
    ) {
        'ngInject';
    }

    public open = (type: string, formConfig: any, formData: any): ng.IPromise<any> => {
        if (type === 'generic') {
            return this.GenericDialogFormService.open(formConfig, formData);
        }
        else if (type === 'attachment') {
            return this.AttachmentDialogFormService.open();
        }
        else {
            throw new Error ('not implemented for type - ' + type);
        }
    };
}

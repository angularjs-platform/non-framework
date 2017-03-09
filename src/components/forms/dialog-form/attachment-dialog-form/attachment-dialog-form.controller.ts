import { IAttachmentDialogFormService, AttachmentFormData, AttachmentListData } from './attachment-dialog-form';

export class AttachmentDialogFormController implements ng.IComponentController {

    public form: AttachmentFormData;

    constructor(
        private $mdToast: ng.material.IToastService,
        private $translate: ng.translate.ITranslateService,
        private $mdDialog: ng.material.IDialogService,
        private AttachmentDialogFormService: IAttachmentDialogFormService
    ) {
        'ngInject';
    }

    public saveData = (): void => {
        this.AttachmentDialogFormService.upload(this.form)
            .then(this.handleUploadSuccess, this.handleUploadFailure);
    }

    public closeDialog = (): void => {
        this.$mdDialog.hide();
    };

    private handleUploadSuccess = (response: AttachmentListData): void => {
        this.$mdDialog.hide(response);
    }

    private handleUploadFailure = (response: any): void => {
        // Show toaster error message
        this.$mdToast.show(this.$mdToast.simple().textContent(this.$translate.instant('FORM.ERROR_UPLOAD')));
        this.form = null;
    }


}

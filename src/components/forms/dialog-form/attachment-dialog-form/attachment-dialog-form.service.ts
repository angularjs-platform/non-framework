import { IAttachmentDialogFormService, AttachmentFormData, AttachmentListData } from './attachment-dialog-form';
import { AttachmentDialogFormController } from './attachment-dialog-form.controller';

export class AttachmentDialogFormService implements IAttachmentDialogFormService {

    constructor(
        private $mdDialog: ng.material.IDialogService,
        private Upload: angular.angularFileUpload.IUploadService
    ) {
        'ngInject';
    }

    public open = (): ng.IPromise<any> => {
        return this.$mdDialog.show({
            multiple: true,
            template: require('./attachment-dialog-form.tpl'),
            controller: AttachmentDialogFormController,
            controllerAs : 'vm',
            bindToController: true
        });
    };

   public upload = (formData: AttachmentFormData): ng.IPromise<AttachmentListData> => {
        return this.Upload.upload({
            url: 'upload',
            method: 'POST',
            data: {
                file: formData.file,
                info: this.Upload.json({title: formData.title})
            }
        }).then(this.getCompleteHandler);
    };

    private getCompleteHandler: any = (response: any) => {
        return response.data;
    };
}

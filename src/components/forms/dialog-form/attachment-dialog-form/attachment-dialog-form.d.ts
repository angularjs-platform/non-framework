export interface IAttachmentDialogFormService {
    open() : ng.IPromise<any>;
    upload(formData: AttachmentFormData) : ng.IPromise<AttachmentListData>;
}

export type AttachmentFormData = {
    title: string;
    file: Object;
}

export type AttachmentListData = {
    name: string;
    attachmentId: string;
}

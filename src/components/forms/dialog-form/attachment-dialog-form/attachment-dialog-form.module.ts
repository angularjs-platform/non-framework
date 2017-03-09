import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.dialog-form.attachment-dialog-form';

import { AttachmentDialogFormService } from './attachment-dialog-form.service';

angular.module(moduleName, [])
    .service('AttachmentDialogFormService', AttachmentDialogFormService);

export default moduleName;

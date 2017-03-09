import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.dialog-form';
import attachmentDialogForm  from './attachment-dialog-form/attachment-dialog-form.module';
import genericDialogForm  from './generic-dialog-form/generic-dialog-form.module';

import { DialogFormService } from './dialog-form.service';

angular.module(moduleName, [attachmentDialogForm, genericDialogForm])
    .service('DialogFormService', DialogFormService);

export default moduleName;

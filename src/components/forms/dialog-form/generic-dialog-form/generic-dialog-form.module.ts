import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.dialog-form.generic-dialog-form';

import { GenericDialogFormService } from './generic-dialog-form.service';

angular.module(moduleName, [])
    .service('GenericDialogFormService', GenericDialogFormService);

export default moduleName;

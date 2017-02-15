import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.dialog-form';

import { DialogFormService } from './dialog-form.service';

angular.module(moduleName, [])
    .service('DialogFormService', DialogFormService);

export default moduleName;

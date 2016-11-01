const moduleName: string = 'non.framework.core.forms.form-validation';

import {GenericFormValidationService} from './form-validation.service';

angular.module(moduleName, [])
    .service('GenericFormValidationService', GenericFormValidationService);

export default moduleName;

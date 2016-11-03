const moduleName: string = 'non.framework.core.forms';

import formSubmission from './submission/form-submission.module';
import formValidation from './validation/form-validation.module';

angular.module(moduleName, [formSubmission, formValidation]);

export default moduleName;

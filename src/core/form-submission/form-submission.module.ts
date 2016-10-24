const moduleName: string = 'non.framework.core.form-submission';

import {GenericFormSubmissionService} from './form-submission.service';

angular.module(moduleName, [])
    .service('GenericFormSubmissionService', GenericFormSubmissionService);

export default moduleName;

const moduleName: string = 'non.framework.core.authentication';

import {AuthenticationService} from './authentication.service';

angular.module(moduleName, [])
    .service('AuthenticationService', AuthenticationService);

export default moduleName;

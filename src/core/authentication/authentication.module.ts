const moduleName: string = 'non.framework.core.authentication';

import * as angular from 'angular';

import {AuthenticationService} from './authentication.service';

angular.module(moduleName, [])
    .service('AuthenticationService', AuthenticationService);

export default moduleName;

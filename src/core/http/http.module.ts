const moduleName: string = 'non.framework.core.http';

import * as angular from 'angular';

import {HttpInterceptor} from './http.interceptor';

angular.module(moduleName, [])
    .service('HttpInterceptor', HttpInterceptor);

export default moduleName;

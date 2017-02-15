import * as angular from 'angular';

const moduleName: string = 'non.framework.core.http';

import {HttpInterceptor} from './http.interceptor';

angular.module(moduleName, [])
    .service('HttpInterceptor', HttpInterceptor);

export default moduleName;

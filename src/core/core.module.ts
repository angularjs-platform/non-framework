const moduleName: string = 'non.framework.core';

import http from './http/http.module';
import authentication from './authentication/authentication.module';

angular.module(moduleName, [http, authentication]);

export default moduleName;

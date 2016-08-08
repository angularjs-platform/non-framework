const moduleName: string = 'non.framework.core';

import config from './config/config.module';
import http from './http/http.module';
import authentication from './authentication/authentication.module';
import layout from './layout/layout.module';

angular.module(moduleName, [http, authentication, config, layout]);

export default moduleName;

const moduleName: string = 'non.framework.core';

import config from './config/config.module';
import http from './http/http.module';
import authentication from './authentication/authentication.module';
import layout from './layout/layout.module';
import theme from './theme/theme.module';
import menu from './menu/menu.module';
import formSubmission from './form-submission/form-submission.module';

angular.module(moduleName, [http, authentication, config, layout, theme, menu, formSubmission]);

export default moduleName;

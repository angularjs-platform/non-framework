const moduleName: string = 'non.framework.core';

import http from './http/http.module';
import layout from './layout/layout.module';
import theme from './theme/theme.module';
import menu from './menu/menu.module';
import forms from './forms/forms.module';

angular.module(moduleName, [http, layout, theme, menu, forms]);

export default moduleName;

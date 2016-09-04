const moduleName: string = 'non.framework.core.theme';

import {ThemeService} from './theme.service';

angular.module(moduleName, [])
    .service('ThemeService', ThemeService);

export default moduleName;

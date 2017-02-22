import * as angular from 'angular';

const moduleName: string = 'non.framework.core.menu';

import {MenuService} from './menu.service';

angular.module(moduleName, [])
    .service('MenuService', MenuService);

export default moduleName;

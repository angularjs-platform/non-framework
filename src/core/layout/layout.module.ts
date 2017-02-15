import * as angular from 'angular';

const moduleName: string = 'non.framework.core.layout';

import {LayoutService} from './layout.service';

angular.module(moduleName, [])
    .service('LayoutService', LayoutService);

export default moduleName;

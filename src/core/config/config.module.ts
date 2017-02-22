import * as angular from 'angular';

const moduleName: string = 'non.framework.core.config';

import {ConfigurationService} from './config.service';

angular.module(moduleName, [])
    .service('ConfigurationService', ConfigurationService);

export default moduleName;

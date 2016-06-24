const moduleName: string = 'non.framework';

import * as angular from 'angular';

import core from './core/core.module';
import components from './components/components.module';
import thirdparty from './thirdparty/thirdparty.module';

angular.module(moduleName, [core, components, thirdparty]);

export default moduleName;

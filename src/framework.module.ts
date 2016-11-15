const moduleName: string = 'non.framework';

import core from './core/core.module';
import components from './components/components.module';
import directives from './directives/directives.module';
import thirdparty from './thirdparty/thirdparty.module';

angular.module(moduleName, [thirdparty, core, components, directives]);

export * from './framework.model';

export default moduleName;

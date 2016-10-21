const moduleName: string = 'non.framework';

import core from './core/core.module';
import components from './components/components.module';
import thirdparty from './thirdparty/thirdparty.module';

angular.module(moduleName, [core, components, thirdparty]);

export * from './framework.model';

export default moduleName;

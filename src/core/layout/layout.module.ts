const moduleName: string = 'non.framework.core.layout';

import {LayoutProvider} from './layout.provider';

angular.module(moduleName, [])
    .provider('Layout', LayoutProvider);

export default moduleName;

const moduleName: string = 'non.framework.components.lean-scroll';

import leanScrollDirective from './lean-scroll.directive';
import {LeanScrollProvider} from './lean-scroll.provider';

angular.module(moduleName, [])
    .directive('nonLeanScroll', leanScrollDirective)
    .provider('LeanScroll', LeanScrollProvider);

export default moduleName;

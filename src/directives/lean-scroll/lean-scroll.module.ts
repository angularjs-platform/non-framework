import * as angular from 'angular';

const moduleName: string = 'non.framework.components.lean-scroll';

import {LeanScrollDirective} from './lean-scroll.directive';
import {LeanScrollProvider} from './lean-scroll.provider';

angular.module(moduleName, [])
    .directive('nonLeanScroll', LeanScrollDirective.instance)
    .provider('LeanScroll', LeanScrollProvider);

export default moduleName;

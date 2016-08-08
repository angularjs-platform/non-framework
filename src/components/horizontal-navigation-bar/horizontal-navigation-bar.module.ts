const moduleName: string = 'non.framework.components.horizontal-navigation-bar';

import horizontalNavigationBarDirective from './horizontal-navigation-bar.directive';

angular.module(moduleName, [])
    .directive('nonHorizontalNavigationBar', horizontalNavigationBarDirective);

export default moduleName;

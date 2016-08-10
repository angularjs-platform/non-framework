const moduleName: string = 'non.framework.components.vertical-navigation-bar';

import verticalNavigationBarDirective from './vertical-navigation-bar.directive';

import sidemenuContent from './sidemenu-content/sidemenu-content.module';

angular.module(moduleName, [sidemenuContent])
    .directive('nonVerticalNavigationBar', verticalNavigationBarDirective);

export default moduleName;

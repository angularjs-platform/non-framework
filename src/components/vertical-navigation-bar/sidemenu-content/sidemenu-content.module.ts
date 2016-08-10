const moduleName: string = 'non.framework.components.sidemenu-content';

import sidemenuContentDirective from './sidemenu-content.directive';

angular.module(moduleName, [])
    .directive('nonSidemenuContent', sidemenuContentDirective);

export default moduleName;

const moduleName: string = 'non.framework.components.sidemenu-content';

import {SideMenuContentComponent} from './sidemenu-content.component';

angular.module(moduleName, [])
    .component('nonSidemenuContent', new SideMenuContentComponent());

export default moduleName;

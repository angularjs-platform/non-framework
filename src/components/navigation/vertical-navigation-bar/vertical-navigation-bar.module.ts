import * as angular from 'angular';

const moduleName: string = 'non.framework.components.vertical-navigation-bar';

import {VerticalNavigationBarComponent} from './vertical-navigation-bar.component';

import sidemenuContent from './sidemenu-content/sidemenu-content.module';

angular.module(moduleName, [sidemenuContent])
    .component('nonVerticalNavigationBar', new VerticalNavigationBarComponent());

export default moduleName;

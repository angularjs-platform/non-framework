import * as angular from 'angular';

const moduleName: string = 'non.framework.components.horizontal-navigation-bar';

import {HorizontalNavigationBarComponent} from './horizontal-navigation-bar.component';

angular.module(moduleName, [])
    .component('nonHorizontalNavigationBar', new HorizontalNavigationBarComponent());

export default moduleName;

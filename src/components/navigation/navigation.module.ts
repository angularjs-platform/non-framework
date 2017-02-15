import * as angular from 'angular';

const moduleName: string = 'non.framework.components.navigation';

import verticalNavigationBar from './vertical-navigation-bar/vertical-navigation-bar.module';
import horizontalNavigationBar from './horizontal-navigation-bar/horizontal-navigation-bar.module';

angular.module(moduleName, [verticalNavigationBar, horizontalNavigationBar]);

export default moduleName;

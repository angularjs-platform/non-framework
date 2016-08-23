const moduleName: string = 'non.framework.components';

import verticalNavigationBar from './vertical-navigation-bar/vertical-navigation-bar.module';
import horizontalNavigationBar from './horizontal-navigation-bar/horizontal-navigation-bar.module';
import leanScroll from './lean-scroll/lean-scroll.module';
import dataGrid from './data-grid/data-grid.module';

angular.module(moduleName, [verticalNavigationBar, horizontalNavigationBar, leanScroll, dataGrid]);

export default moduleName;

const moduleName: string = 'non.framework.components';

import verticalNavigationBar from './vertical-navigation-bar/vertical-navigation-bar.module';
import horizontalNavigationBar from './horizontal-navigation-bar/horizontal-navigation-bar.module';
import leanScroll from './lean-scroll/lean-scroll.module';

angular.module(moduleName, [verticalNavigationBar, horizontalNavigationBar, leanScroll]);

export default moduleName;

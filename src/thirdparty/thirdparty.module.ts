const moduleName: string = 'non.framework.thirdparty';

declare const PerfectScrollbar: any;
declare const MobileDetect: any;

angular.module(moduleName, ['ui.router', 'ngAria', 'ngAnimate',
    'ngMaterial', 'angular-loading-bar', 'ngCookies', 'ngMaterialSidemenu'])
    .constant('PerfectScrollbar', PerfectScrollbar)
    .constant('MobileDetect', MobileDetect);

export default moduleName;
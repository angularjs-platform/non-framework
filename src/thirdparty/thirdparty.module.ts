const moduleName: string = 'non.framework.thirdparty';

declare const PerfectScrollbar: any;
declare const MobileDetect: any;
declare const _: any;

angular.module(moduleName, [ 'ui.router', 'ngAria', 'ngAnimate', 'ngMaterial', 'angular-loading-bar', 'ngCookies', 'ngMaterialSidemenu',
                    'ngMessages', 'ngResource', 'ngSanitize', 'pascalprecht.translate', 'ui.grid', 'ng-fx', 'formly'])
    .constant('_', _)
    .constant('PerfectScrollbar', PerfectScrollbar)
    .constant('MobileDetect', MobileDetect);

export default moduleName;

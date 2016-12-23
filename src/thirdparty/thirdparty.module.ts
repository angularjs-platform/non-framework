const moduleName: string = 'non.framework.thirdparty';

declare const PerfectScrollbar: any;
declare const _: any;

angular.module(moduleName, [ 'ui.router', 'ngAria', 'ngAnimate', 'ngMaterial', 'angular-loading-bar', 'ngCookies', 'ngMaterialSidemenu',
                    'ngMessages', 'ngResource', 'ngSanitize', 'pascalprecht.translate', 'ui.grid', 'ui.grid.selection', 'ui.grid.pagination',
                    'ng-fx', 'formly', 'LocalStorageModule', 'ncy-angular-breadcrumb'])
    .constant('_', _)
    .constant('PerfectScrollbar', PerfectScrollbar);

export default moduleName;

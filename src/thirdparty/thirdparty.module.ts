import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-local-storage';
import 'angular-breadcrumb';
import 'angular-translate';
import 'ng-file-upload';

const moduleName: string = 'non.framework.thirdparty';

declare const PerfectScrollbar: any;
declare const _: any;

// Setup JQuery
declare const jquery: any;

angular.module(moduleName, [ 'ui.router', 'ngAria', 'ngAnimate', 'ngMaterial', 'angular-loading-bar', 'ngCookies', 'ngMaterialSidemenu',
                    'ngMessages', 'ngResource', 'ngSanitize', 'pascalprecht.translate', 'ui.grid', 'ui.grid.selection', 'ui.grid.pagination',
                    'ngFileUpload', 'ng-fx', 'formly', 'LocalStorageModule', 'ncy-angular-breadcrumb', 'dragularModule', 'vAccordion'])
    .constant('_', _)
    .constant('$', jquery)
    .constant('PerfectScrollbar', PerfectScrollbar);

export default moduleName;

const moduleName: string = 'non.framework.thirdparty';

// 3rd party libraries
import 'jquery';
import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';

angular.module(moduleName, ['ui.router', 'ngAria', 'ngAnimate', 'ngMaterial']);

export default moduleName;

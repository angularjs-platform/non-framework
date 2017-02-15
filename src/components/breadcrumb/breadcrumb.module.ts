import * as angular from 'angular';

const moduleName: string = 'non.framework.components.breadcrumb';

import {BreadcrumbConfig} from './breadcrumb.config';

angular.module(moduleName, [])
    .config(BreadcrumbConfig);

export default moduleName;

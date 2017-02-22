import * as angular from 'angular';

const moduleName: string = 'non.framework.components.page-content-wrapper';

import {PageContentWrapperComponent} from './page-content-wrapper.component';

angular.module(moduleName, [])
    .component('nonPageContentWrapper', new PageContentWrapperComponent());

export default moduleName;

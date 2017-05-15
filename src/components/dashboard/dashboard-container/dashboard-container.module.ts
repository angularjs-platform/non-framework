import * as angular from 'angular';

const moduleName: string = 'non.framework.components.dashboard.dashboard-container';

import {DashboardContainerComponent} from './dashboard-container.component';

angular.module(moduleName, [])
    .component('nonDashboardContainer', new DashboardContainerComponent());

export default moduleName;

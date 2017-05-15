import * as angular from 'angular';

const moduleName: string = 'non.framework.components.dashboard';

// Providers
// import {DashboardProvider} from './dashboard.provider';

// Sub modules
import dashboardContainer from './dashboard-container/dashboard-container.module';

angular.module(moduleName, [dashboardContainer]);
    // .provider('Dashboard', DashboardProvider);

export default moduleName;

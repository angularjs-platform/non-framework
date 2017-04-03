import * as angular from 'angular';

const moduleName: string = 'non.framework.components.dashboard';

// Providers
import {DashboardProvider} from './dashboard.provider';

angular.module(moduleName, [])
    .provider('Dashboard', DashboardProvider);

export default moduleName;

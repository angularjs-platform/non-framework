import * as angular from 'angular';

const moduleName: string = 'non.framework.components.grids.dialog-grid';

import { DialogGridService } from './dialog-grid.service';

angular.module(moduleName, [])
    .service('DialogGridService', DialogGridService);

export default moduleName;

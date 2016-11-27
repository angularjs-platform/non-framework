import {DataGridComponent} from './data-grid.component';

const moduleName: string = 'non.framework.components.grid';

import {DataGridService} from './data-grid.service';

angular.module(moduleName, [])
    .service('DataGridService', DataGridService)
    .component('nonDataGrid', new DataGridComponent());

export default moduleName;

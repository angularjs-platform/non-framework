const moduleName: string = 'non.framework.components.grids.data-grid';

import { DataGridComponent } from './data-grid.component';
import { DataGridService } from './data-grid.service';

angular.module(moduleName, [])
    .service('DataGridService', DataGridService)
    .component('nonDataGrid', new DataGridComponent());

export default moduleName;

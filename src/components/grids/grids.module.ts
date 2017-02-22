import * as angular from 'angular';

const moduleName: string = 'non.framework.components.grids';

import dataGrid from './data-grid/data-grid.module';
import dialogGrid from './dialog-grid/dialog-grid.module';
import gridMultipleItems from './grid-multiple-items/grid-multiple-items.module';

angular.module(moduleName, [dataGrid, dialogGrid, gridMultipleItems]);

export default moduleName;


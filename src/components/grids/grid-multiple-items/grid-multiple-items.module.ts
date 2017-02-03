import {GridMultipleItemsComponent} from './grid-multiple-items.component';

const moduleName: string = 'non.framework.components.grids.grid-multiple-items';

angular.module(moduleName, [])
    .component('nonGridMultipleItems', new GridMultipleItemsComponent());

export default moduleName;

import {MultiSelectComponent} from './multi-select.component';

const moduleName: string = 'non.container.multiselect';

angular.module(moduleName, [])
    .component('nonMultiSelect', new MultiSelectComponent());

export default moduleName;


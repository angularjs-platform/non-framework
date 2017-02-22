import * as angular from 'angular';

import {LookupComponent} from './lookup.component';

const moduleName: string = 'non.framework.components.lookup';

angular.module(moduleName, [])
    .component('nonLookup', new LookupComponent());

export default moduleName;

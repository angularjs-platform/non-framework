import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.formly.widgets.divider';

import {FormlyConfig} from './divider.config';

angular.module(moduleName, [])
    .config(FormlyConfig);

export default moduleName;

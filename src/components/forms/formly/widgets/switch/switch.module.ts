import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.formly.widgets.switch';

import {FormlyConfig} from './switch.config';

angular.module(moduleName, [])
    .config(FormlyConfig);

export default moduleName;

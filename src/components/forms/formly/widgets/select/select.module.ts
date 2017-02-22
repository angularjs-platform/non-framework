import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.formly.widgets.select';

import {FormlyConfig} from './select.config';

angular.module(moduleName, [])
    .config(FormlyConfig);

export default moduleName;

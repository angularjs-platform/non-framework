import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.formly.widgets.datepicker';

import {FormlyConfig} from './datepicker.config';

angular.module(moduleName, [])
    .config(FormlyConfig);

export default moduleName;

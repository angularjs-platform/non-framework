import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.formly.widgets.multiselect';

import {FormlyConfig} from './multiselect.config';

angular.module(moduleName, [])
    .config(FormlyConfig);

export default moduleName;

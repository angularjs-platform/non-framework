import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.formly.widget-wrappers.validation-messages';

import {FormlyConfig} from './validation-messages.config';

angular.module(moduleName, [])
    .config(FormlyConfig);

export default moduleName;

import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.formly.widget-wrappers.fieldset';

import {FormlyConfig} from './fieldset.config';

angular.module(moduleName, [])
    .config(FormlyConfig);

export default moduleName;

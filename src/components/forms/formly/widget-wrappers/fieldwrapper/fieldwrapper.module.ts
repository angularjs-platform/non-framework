import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.formly.widget-wrappers.fieldwrapper';

import {FormlyConfig} from './fieldwrapper.config';

angular.module(moduleName, [])
    .config(FormlyConfig);

export default moduleName;

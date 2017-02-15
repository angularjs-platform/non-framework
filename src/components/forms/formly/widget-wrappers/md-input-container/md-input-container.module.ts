import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.formly.widget-wrappers.md-input-container';

import {FormlyConfig} from './md-input-container.config';

angular.module(moduleName, [])
    .config(FormlyConfig);

export default moduleName;

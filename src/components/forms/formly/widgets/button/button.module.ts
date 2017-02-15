import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.formly.widgets.button';

import {FormlyConfig} from './button.config';

angular.module(moduleName, [])
    .config(FormlyConfig);

export default moduleName;

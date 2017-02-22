import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.formly.widgets.radiobutton';

import {FormlyConfig} from './radiobutton.config';

angular.module(moduleName, [])
    .config(FormlyConfig);

export default moduleName;

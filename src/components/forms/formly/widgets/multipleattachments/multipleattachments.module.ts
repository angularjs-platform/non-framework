import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.formly.widgets.multipleattachments';

import {FormlyConfig} from './multipleattachments.config';

angular.module(moduleName, [])
    .config(FormlyConfig);

export default moduleName;

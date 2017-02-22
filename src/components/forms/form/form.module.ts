import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.form';

import {FormComponent} from './form.component';
import {FormDisplayState} from './form.constant';

angular.module(moduleName, [])
    .component('nonForm', new FormComponent())
    .constant('FormDisplayState', FormDisplayState);

export default moduleName;

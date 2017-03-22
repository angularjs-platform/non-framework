import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.flexi-form';


import { FlexiFormComponent } from './flexi-form.component';
import { FlexiFormService } from './flexi-form.service';

angular.module(moduleName, [])
    .component('nonFlexiForm', new FlexiFormComponent())
    .service('FlexiFormService', FlexiFormService);

export default moduleName;

import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms';

import formlyComponents from './formly/formly.module';
import form from './form/form.module';
import dialogForm from './dialog-form/dialog-form.module';
import flexiForm from './flexi-form/flexi-form.module';

angular.module(moduleName, [formlyComponents, form, dialogForm, flexiForm]);

export default moduleName;

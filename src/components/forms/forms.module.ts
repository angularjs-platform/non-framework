const moduleName: string = 'non.framework.components.forms';

import formlyComponents from './formly/formly.module';
import form from './form/form.module';
import dialogForm from './dialog-form/dialog-form.module';

angular.module(moduleName, [formlyComponents, form, dialogForm]);

export default moduleName;

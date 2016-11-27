const moduleName: string = 'non.framework.components.forms';

import formlyComponents from './formly/formly.module';
import form from './form/form.module';

angular.module(moduleName, [formlyComponents, form]);

export default moduleName;

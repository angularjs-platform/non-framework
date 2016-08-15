const moduleName: string = 'non.framework.components.forms';

import formlyComponents from './formly/formly.module';
import accessibleForm from './accessible-form/accessible-form.module';

angular.module(moduleName, [formlyComponents, accessibleForm]);

export default moduleName;

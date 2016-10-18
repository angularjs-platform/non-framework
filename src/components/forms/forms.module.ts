const moduleName: string = 'non.framework.components.forms';

import formlyComponents from './formly/formly.module';
import accessibleForm from './accessible-form/accessible-form.module';
import form from './form/form.module';
import transactionFormWrapper from './transaction-form-wrapper/transaction-form-wrapper.module';

angular.module(moduleName, [formlyComponents, accessibleForm, form, transactionFormWrapper]);

export default moduleName;

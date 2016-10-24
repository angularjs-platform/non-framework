const moduleName: string = 'non.framework.components.forms';

import formlyComponents from './formly/formly.module';
import form from './form/form.module';
import transactionFormWrapper from './transaction-form-wrapper/transaction-form-wrapper.module';

angular.module(moduleName, [formlyComponents, form, transactionFormWrapper]);

export default moduleName;

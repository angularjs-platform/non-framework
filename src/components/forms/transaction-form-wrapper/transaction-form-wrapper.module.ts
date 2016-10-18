const moduleName: string = 'non.framework.components.forms.transaction-form-wrapper';

import {TransactionFormWrapperComponent} from './transaction-form-wrapper.component';

angular.module(moduleName, [])
    .component('nonTransactionFormWrapper', new TransactionFormWrapperComponent());

export default moduleName;

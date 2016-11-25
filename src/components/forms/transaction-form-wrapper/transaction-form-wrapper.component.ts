export class TransactionFormWrapperComponent implements ng.IComponentOptions {

    public bindings: {[binding: string]: string};
    public transclude: boolean;
    public template: string;

    constructor() {
        this.transclude = true;

        this.template = require('./transaction-form-wrapper.tpl');
    }
}

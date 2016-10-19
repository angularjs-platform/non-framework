import {FormController} from './form.controller';

export class FormComponent implements ng.IComponentOptions {

    public bindings: {[binding: string]: string};
    public controller: ng.IComponentController;
    public template: string;
    public transclude: boolean;

    constructor() {
        this.bindings = {
            configuration: '=',
            submit: '='
        };

        this.transclude = true;

        this.controller = FormController;

        this.template =  require('./form.tpl');
    }
}

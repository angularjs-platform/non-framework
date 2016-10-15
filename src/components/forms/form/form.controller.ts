import {FormConfiguration} from './form';

export class FormController implements ng.IComponentController {

    public configuration: FormConfiguration;
    public provider: Object;
    public submit: Function;

    constructor() {
        this.configuration.options.data = {
            provider: this.provider
        };
    }
}

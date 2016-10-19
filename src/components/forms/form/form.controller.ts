import {FormConfiguration} from './form';

export class FormController implements ng.IComponentController {

    public configuration: FormConfiguration;
    public submit: Function;

    constructor() {
        // empty
    }
}

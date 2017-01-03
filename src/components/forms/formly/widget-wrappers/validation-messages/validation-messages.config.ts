import {Formly} from '../../formly';

export class FormlyConfig {
    constructor(private formlyConfigProvider: Formly.IFormlyConfig) {
        'ngInject';

        this.formlyConfigProvider.setWrapper({
            name: 'validationMessages',
            template: require('./validation-messages.tpl')
        });
    }
}

export class FormlyConfig {
    constructor(private formlyConfigProvider: AngularFormly.IFormlyConfig) {
        'ngInject';

        this.formlyConfigProvider.setWrapper({
            name: 'validationMessages',
            template: require('./validation-messages.tpl')
        });
    }
}

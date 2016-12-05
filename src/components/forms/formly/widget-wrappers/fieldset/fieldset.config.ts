export class FormlyConfig {
    constructor(private formlyConfigProvider: AngularFormly.IFormlyConfig) {
        'ngInject';

        this.formlyConfigProvider.setWrapper({
            name: 'fieldset',
            template: require('./fieldset.tpl')
        });
    }
}

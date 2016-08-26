export class FormlyConfig {
    constructor(private formlyConfigProvider: AngularFormly.IFormlyConfig) {
        'ngInject';

        this.formlyConfigProvider.setWrapper({
            name: 'mdLabel',
            template: require('./label.tpl')
        });
    }
}

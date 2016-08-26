export class FormlyConfig {
    constructor(private formlyConfigProvider: AngularFormly.IFormlyConfig) {
        'ngInject';

        this.formlyConfigProvider.setWrapper({
            name: 'mdInputContainer',
            template: require('./md-input-container.tpl')
        });
    }
}

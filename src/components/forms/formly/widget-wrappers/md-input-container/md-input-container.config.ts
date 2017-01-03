import {Formly} from '../../formly';

export class FormlyConfig {
    constructor(private formlyConfigProvider: Formly.IFormlyConfig) {
        'ngInject';

        this.formlyConfigProvider.setWrapper({
            name: 'mdInputContainer',
            template: require('./md-input-container.tpl')
        });
    }
}

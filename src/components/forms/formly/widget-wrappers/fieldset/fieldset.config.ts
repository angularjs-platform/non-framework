import {Formly} from '../../formly';

export class FormlyConfig {
    constructor(private formlyConfigProvider: Formly.IFormlyConfig) {
        'ngInject';

        this.formlyConfigProvider.setWrapper({
            name: 'fieldset',
            template: require('./fieldset.tpl')
        });
    }
}

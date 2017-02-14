import {Formly} from './formly';

export class FormlyConfig {
    constructor(private formlyConfigProvider: Formly.IFormlyConfig) {
        'ngInject';

        this.formlyConfigProvider.extras.errorExistsAndShouldBeVisibleExpression = 'fc.$touched || (form.$submitted && formState.triggerFormValidation)';
    }
}

export class FormlyConfig {
    constructor(private formlyConfigProvider: AngularFormly.IFormlyConfig) {
        'ngInject';

        this.formlyConfigProvider.extras.errorExistsAndShouldBeVisibleExpression = 'fc.$touched || form.$submitted';
    }
}

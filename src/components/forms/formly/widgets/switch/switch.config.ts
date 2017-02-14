import {Formly} from '../../formly';

export class FormlyConfig {

    constructor(private formlyConfigProvider: Formly.IFormlyConfig) {
        'ngInject';

        this.formlyConfigProvider.setType({
            name: 'switch',
            template: require('./switch.tpl'),
            defaultOptions: {
                templateOptions: {
                    disabled: false
                },
                ngModelAttrs: {
                    disabled: {
                        bound: 'ng-disabled'
                    },
                    trueValue: {
                        attribute: 'ng-true-value'
                    },
                    falseValue: {
                        attribute: 'ng-false-value'
                    }
                }
            },
            apiCheck: (check: any): any => ({
                templateOptions: {
                    disabled: check.bool.optional,
                    trueValue: check.oneOfType([ check.string, check.number, check.bool.optional]).optional,
                    falseValue: check.oneOfType([ check.string, check.number, check.bool.optional]).optional,
                    theme: check.string.optional
                }
            })
        });
    }
}

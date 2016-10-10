export class FormlyConfig {
    // TODO:G Cant use AngularFormly.IFormlyConfig typedef bcoz apiCheck needs to be a function for the code to work. However type def checks for a object
    constructor(private formlyConfigProvider: any) {
        'ngInject';

        this.formlyConfigProvider.setType({
            template: require('./checkbox.tpl'),
            name: 'checkbox',
            defaultOptions: {
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

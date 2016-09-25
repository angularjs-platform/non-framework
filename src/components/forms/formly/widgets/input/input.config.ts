export class FormlyConfig {
    // TODO:G Cant use AngularFormly.IFormlyConfig typedef bcoz apiCheck needs to be a function for the code to work. However type def checks for a object
    constructor(private formlyConfigProvider: any) {
        'ngInject';

        this.formlyConfigProvider.setType({
            name: 'input',
            template: require('./input.tpl'),
            wrapper: ['mdLabel', 'validationMessages', 'mdInputContainer'],
            defaultOptions: {
                templateOptions: {
                    type: 'text',
                    disabled: false,
                    readonly: false
                },
                ngModelAttrs: {
                    maxlength: {
                        bound: 'md-maxlength'
                    },
                    step: {
                        attribute: 'step'
                    },
                    disabled: {
                        bound: 'ng-disabled'
                    },
                    readonly: {
                        bound: 'ng-readonly'
                    },
                    pattern: {
                        bound: 'ng-pattern'
                    }
                }
            },
            apiCheck: (check: any): any => {
                return {
                    templateOptions: {
                        disabled: check.oneOfType([ check.string, check.bool.optional]).optional,
                        readonly: check.oneOfType([ check.string, check.bool.optional]).optional,
                        maxlength: check.number.optional,
                        minlength: check.number.optional,
                        min: check.number.optional,
                        max: check.number.optional,
                        required: check.oneOfType([ check.string, check.bool.optional]).optional,
                        type: check.string,
                        step: check.number.optional,
                        pattern: check.oneOfType([ check.string, check.instanceOf(RegExp)]).optional
                    }
                };
            }
        });
    }
}

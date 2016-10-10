export class FormlyConfig {
    // TODO:G Cant use AngularFormly.IFormlyConfig typedef bcoz apiCheck needs to be a function for the code to work. However type def checks for a object
    constructor(private formlyConfigProvider: any) {
        'ngInject';

        this.formlyConfigProvider.setType({
            name: 'textarea',
            template: require('./textarea.tpl'),
            wrapper: ['mdLabel', 'validationMessages', 'mdInputContainer'],
            defaultOptions: {
                templateOptions: {
                    rows: 3
                },
                ngModelAttrs: {
                    disabled: {
                        bound: 'ng-disabled'
                    },
                    readonly: {
                        bound: 'ng-readonly'
                    },
                    maxlength: {
                        bound: 'md-maxlength'
                    },
                    rows: {
                        attribute: 'rows'
                    }
                }
            },
            apiCheck: (check: any): any => ({
                templateOptions: {
                    disabled: check.bool.optional,
                    readonly: check.bool.optional,
                    maxlength: check.number.optional,
                    minlength: check.number.optional,
                    required: check.bool.optional,
                    rows: check.number.optional
                }
            })
        });
    }
}

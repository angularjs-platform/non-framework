export class FormlyConfig {
    // TODO:G Cant use AngularFormly.IFormlyConfig typedef bcoz apiCheck needs to be a function for the code to work. However type def checks for a object
    constructor(private formlyConfigProvider: any) {
        'ngInject';

        this.formlyConfigProvider.setType({
            name: 'select',
            template: require('./select.tpl'),
            wrapper: ['mdLabel', 'validationMessages', 'mdInputContainer'],
            defaultOptions: {
                templateOptions: {
                    disabled: false
                },
                ngModelAttrs: {
                    disabled: {
                        bound: 'ng-disabled'
                    },
                    onClose: {
                        statement: 'md-on-close'
                    },
                    onOpen: {
                        statement: 'md-on-open'
                    }
                }
            },
            apiCheck: (check: any): any => ({
                templateOptions: {
                    disabled: check.bool.optional,
                    options: check.arrayOf(check.object),
                    multiple: check.bool.optional,
                    labelProp: check.string.optional,
                    valueProp: check.string.optional,
                    onClose: check.func.optional,
                    onOpen: check.func.optional,
                    theme: check.string.optional
                }
            })
        });
    }
}

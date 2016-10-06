export class FormlyConfig {
    // TODO:G Cant use AngularFormly.IFormlyConfig typedef bcoz apiCheck needs to be a function for the code to work. However type def checks for a object
    constructor(private formlyConfigProvider: any) {
        'ngInject';

        this.formlyConfigProvider.setType({
            name: 'textarea',
            template: require('./textarea.tpl'),
            wrapper: ['mdLabel', 'validationMessages', 'mdInputContainer'],
            defaultOptions: {
                ngModelAttrs: {
                    disabled: {
                        bound: 'ng-disabled'
                    },
                    rows: {
                        attribute: 'rows'
                    },
                    cols: {
                        attribute: 'cols'
                    }
                },
                templateOptions: {
                    grow: true
                }
            },
            apiCheck: (check: any): any => ({
                templateOptions: {
                    disabled: check.bool.optional,
                    rows: check.number.optional,
                    cols: check.number.optional,
                    grow: check.bool.optional,
                    theme: check.string.optional
                }
            })
        });
    }
}

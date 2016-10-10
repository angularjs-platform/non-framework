export class FormlyConfig {
    // TODO:G Cant use AngularFormly.IFormlyConfig typedef bcoz apiCheck needs to be a function for the code to work. However type def checks for a object
    constructor(private formlyConfigProvider: any) {
        'ngInject';

        this.formlyConfigProvider.setType({
            name: 'datepicker',
            template: require('./datepicker.tpl'),
            wrapper: ['mdLabel', 'validationMessages', 'mdInputContainer'],
            defaultOptions: {
                ngModelAttrs: {
                    disabled: {
                        bound: 'ng-disabled'
                    },
                    // TODO:G datepicker doesnt support readonly so we are making it disabled and styling it to look like readonly. It can still hold a value.
                    readonly: {
                        bound: 'ng-disabled'
                    },
                    placeholder: {
                        attribute: 'md-placeholder'
                    },
                    minDate: {
                        bound: 'md-min-date'
                    },
                    maxDate: {
                        bound: 'md-max-date'
                    },
                    filterDate: {
                        bound: 'md-date-filter'
                    }
                }
            },
            apiCheck: (check: any): any => ({
                templateOptions: {
                    disabled: check.bool.optional,
                    readonly: check.bool.optional,
                    required: check.bool.optional,
                    placeholder: check.string.optional,
                    minDate: check.instanceOf(Date).optional,
                    maxDate: check.instanceOf(Date).optional,
                    filterDate: check.func.optional,
                    theme: check.string.optional
                }
            })
        });
    }
}

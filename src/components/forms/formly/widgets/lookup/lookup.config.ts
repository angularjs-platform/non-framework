export class FormlyConfig {
    // TODO:G Cant use AngularFormly.IFormlyConfig typedef bcoz apiCheck needs to be a function for the code to work. However type def checks for a object
    constructor(private formlyConfigProvider: any) {
        'ngInject';

        this.formlyConfigProvider.setType({
            name: 'lookup',
            template: require('./lookup.tpl'),
            wrapper: ['mdLabel', 'mdInputContainer'],
            defaultOptions: {
                ngModelAttrs: {
                    disabled: {
                        bound: 'ng-disabled'
                    },
                    readonly: {
                        bound: 'ng-disabled'
                    }
                }
            },
            apiCheck: (check: any): any => ({
                templateOptions: {
                    disabled: check.bool.optional,
                    readonly: check.bool.optional,
                    required: check.bool.optional,
                    mapping: check.object.optional,
                    type: check.string.optional,
                    dataSource: check.string.optional,
                    theme: check.string.optional
                }
            })
        });
    }
}

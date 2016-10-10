export class FormlyConfig {
    // TODO:G Cant use AngularFormly.IFormlyConfig typedef bcoz apiCheck needs to be a function for the code to work. However type def checks for a object
    constructor(private formlyConfigProvider: any) {
        'ngInject';

        this.formlyConfigProvider.setType({
            name: 'radiobutton',
            template: require('./radiobutton.tpl'),
            wrapper: ['mdLabel'],
            defaultOptions: {
                ngModelAttrs: {
                    disabled: {
                        bound: 'ng-disabled'
                    }
                }
            },
            apiCheck: (check: any): any => ({
                templateOptions: {
                    disabled: check.bool.optional,
                    options: check.arrayOf(check.object),
                    labelProp: check.string.optional,
                    valueProp: check.string.optional,
                    theme: check.string.optional
                }
            })
        });
    }
}

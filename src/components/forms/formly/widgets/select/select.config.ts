import {Formly} from '../../formly';

export class FormlyConfig {

    constructor(private formlyConfigProvider: Formly.IFormlyConfig) {
        'ngInject';

        this.formlyConfigProvider.setType({
            name: 'select',
            template: require('./select.tpl'),
            wrapper: ['mdLabel', 'validationMessages', 'mdInputContainer'],
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
                    options: check.arrayOf(check.object).optional,
                    multiple: check.bool.optional,
                    labelProp: check.string.optional,
                    valueProp: check.string.optional,
                    theme: check.string.optional
                }
            })
        });
    }
}

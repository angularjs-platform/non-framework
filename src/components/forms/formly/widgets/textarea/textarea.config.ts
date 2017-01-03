import {Formly} from '../../formly';

export class FormlyConfig {

    constructor(private formlyConfigProvider: Formly.IFormlyConfig) {
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

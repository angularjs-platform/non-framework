import {Formly} from '../../formly';

export class FormlyConfig {

    constructor(private formlyConfigProvider: Formly.IFormlyConfig) {
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

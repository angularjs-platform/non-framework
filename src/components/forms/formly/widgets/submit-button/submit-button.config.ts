import {Formly} from '../../formly';

export class FormlyConfig {

    constructor(private formlyConfigProvider: Formly.IFormlyConfig) {
        'ngInject';

        this.formlyConfigProvider.setType({
            extends: 'button',
            name: 'submitbutton',
            defaultOptions: {
                templateOptions: {
                    type: 'submit'
                }
            },
            controller: ($scope: any): void => {
                'ngInject';
                $scope.onClick = ($event: any): any => {
                    $scope.formState.actionConfig = $scope.to.actionConfig;
                };
            },
            apiCheck: (check: any): any => ({
                templateOptions: {
                    actionConfig: check.object.optional
                }
            })
        });
    }
}

export class FormlyConfig {
    // TODO:G Cant use AngularFormly.IFormlyConfig typedef bcoz apiCheck needs to be a function for the code to work. However type def checks for a object
    constructor(private formlyConfigProvider: any) {
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
                    actionConfig: check.object
                }
            })
        });
    }
}

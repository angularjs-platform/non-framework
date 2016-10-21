
export class FormlyConfig {
    // TODO:G Cant use AngularFormly.IFormlyConfig typedef bcoz apiCheck needs to be a function for the code to work. However type def checks for a object
    constructor(private formlyConfigProvider: any) {
        'ngInject';

        this.formlyConfigProvider.setType({
            template: require('./button.tpl'),
            name: 'button',
            defaultOptions: {
                templateOptions: {
                    type: 'button'
                },
                extras: {
                    skipNgModelAttrsManipulator: true // performance optimazation because this type has no ng-model
                }
            },
            controller: ($scope: any): void => {
                'ngInject';

                $scope.onClick = ($event: any): any => {
                    if (angular.isUndefined($scope.to.onClick)) {
                        return null;
                    }
                    else if (angular.isString($scope.to.onClick)) {
                        return $scope.$eval($scope.to.onClick, {$event: $event});
                    }
                    else {
                        return $scope.to.onClick($event);
                    }
                };
            },
            apiCheck: (check: any): any => ({
                templateOptions: {
                    onClick: check.oneOfType([check.string, check.func]).optional,
                    type: check.string.optional,
                    label: check.string
                }
            })
        });
    }
}

export class FormlyConfig {
    // TODO:G Cant use AngularFormly.IFormlyConfig typedef bcoz apiCheck needs to be a function for the code to work. However type def checks for a object
    constructor(private formlyConfigProvider: any) {
        'ngInject';

        this.formlyConfigProvider.setType({
            name: 'gridmultipleitems',
            template: require('./gridmultipleitems.tpl'),

            defaultOptions: {
                templateOptions: {
                    canEdit: true,
                    type: 'generic'
                },
                ngModelAttrs: {
                    disabled: {
                        bound: 'ng-disabled'
                    },
                    readonly: {
                        bound: 'ng-disabled'
                    }
                }
            },
            controller: ($scope: any): void => {
                'ngInject';

                $scope.getCount = (): number => {
                    let modelName: string = $scope.options.key;
                    if ($scope.model[modelName] !== undefined) {
                        return $scope.model[modelName].length;
                    }
                    else {
                        return 0;
                    }
                };

            },
            apiCheck: (check: any): any => ({
                templateOptions: {
                    disabled: check.bool.optional,
                    readonly: check.bool.optional,
                    gridConfig: check.object,
                    formConfig: check.arrayOf(check.object).optional,
                    type: check.string.optional,
                    canEdit: check.bool.optional,
                    maxItems: check.number.optional
                }
            })
        });
    }
}

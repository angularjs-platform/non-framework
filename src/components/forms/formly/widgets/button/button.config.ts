import {IThemeService} from '../../../../../core/theme/theme';
import {Formly} from '../../formly';

export class FormlyConfig {
    constructor(private formlyConfigProvider: Formly.IFormlyConfig) {
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
            controller: ($scope: any, ThemeService: IThemeService): void => {
                'ngInject';

                $scope.ThemeService = ThemeService;

                $scope.onClick = ($event: any): any => {
                    if (angular.isUndefined($scope.to.onclick)) {
                        return null;
                    }
                    else if (angular.isString($scope.to.onclick)) {
                        return $scope.$eval($scope.to.onclick, {$event: $event});
                    }
                    else {
                        return $scope.to.onclick($event);
                    }
                };
            },
            apiCheck: (check: any): any => ({
                templateOptions: {
                    onclick: check.oneOfType([check.string, check.func]).optional,
                    type: check.string.optional,
                    label: check.string
                }
            })
        });
    }
}

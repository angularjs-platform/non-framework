export class BreadcrumbConfig {
    constructor(private $breadcrumbProvider: angular.ncy.$breadcrumbProvider) {
        'ngInject';

        $breadcrumbProvider.setOptions({
            template: require('./breadcrumb.tpl'),
            includeAbstract: true
        });
    }
}

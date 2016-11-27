export class BreadcrumbConfig {
    constructor(private $breadcrumbProvider: ncy.$breadcrumbProvider) {
        'ngInject';

        $breadcrumbProvider.setOptions({
            template: require('./breadcrumb.tpl'),
            includeAbstract: true
        });
    }
}

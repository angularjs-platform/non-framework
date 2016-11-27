export class PageContentWrapperComponent implements ng.IComponentOptions {

    public bindings: {[binding: string]: string};
    public transclude: boolean;
    public template: string;

    constructor() {
        this.bindings = {
            title: '@'
        };
        this.transclude = true;

        this.template = require('./page-content-wrapper.tpl');
    }
}

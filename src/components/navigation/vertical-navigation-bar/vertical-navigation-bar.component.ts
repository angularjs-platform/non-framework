export class VerticalNavigationBarComponent implements ng.IComponentOptions {

    public bindings: {[binding: string]: string};
    public template: string;
    public transclude: boolean;

    constructor() {
        this.bindings = {
           menuList: '='
        };

        this.transclude = true;

        this.template =  require('./vertical-navigation-bar.tpl');
    }
}

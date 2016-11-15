import {SidemenuContentController} from './sidemenu-content.controller';

export class SideMenuContentComponent implements ng.IComponentOptions {

    public bindings: {[binding: string]: string};
    public controller: ng.IControllerConstructor;
    public template: string;
    public transclude: boolean;
    public replace: boolean;

    constructor() {
        this.bindings = {
           heading: '@mdHeading',
            icon: '@?mdIcon',
            svgIcon: '@?mdSvgIcon',
            arrow: '@?mdArrow'
        };

        this.controller = SidemenuContentController;
        this.transclude = true;
        this.template =  require('./sidemenu-content.tpl');
    }
}

import {DashboardContainerController} from './dashboard-container.controller';

export class DashboardContainerComponent implements ng.IComponentOptions {

    public bindings: {[binding: string]: string};
    public controller: ng.IControllerConstructor;
    public template: string;
    public transclude: boolean;

    constructor() {
        this.bindings = {

        };

        this.transclude = true;

        this.controller = DashboardContainerController;

        this.template =  require('./dashboard-container.tpl');
    }
}

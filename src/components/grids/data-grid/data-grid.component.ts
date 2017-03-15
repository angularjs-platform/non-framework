import {DataGridController} from './data-grid.controller';

export class DataGridComponent implements ng.IComponentOptions {

    public bindings: {[binding: string]: string};
    public controller: ng.IControllerConstructor;
    public template: string;

    constructor() {
        this.bindings = {
            provider: '=',
            source: '=',
            title: '@'
        };

        this.controller = DataGridController;

        this.template =  require('./data-grid.tpl');
    }
}

import {MultiSelectController} from './multi-select.controller';

export class MultiSelectComponent implements ng.IComponentOptions {

    public bindings: {[binding: string]: string};
    public controller: ng.IControllerConstructor;
    public template: string;

    constructor() {
        this.bindings = {
            source: '=',
            target: '='
        };

        this.controller = MultiSelectController;

        this.template =  require('./multi-select.tpl');
    }
}


import {LookupController} from './lookup.controller';

export class LookupComponent implements ng.IComponentOptions {

    public bindings: {[binding: string]: string};
    public controller: ng.IControllerConstructor;
    public template: string;

    constructor() {
        this.bindings = {
            mapping: '=',
            model: '=',
            viewManager: '=',
            sourceData: '=',
            type: '='
        };

        this.controller = LookupController;

        this.template =  require('./lookup.tpl');
    }
}

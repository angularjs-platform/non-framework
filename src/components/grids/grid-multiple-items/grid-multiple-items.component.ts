import { GridMultipleItemsController } from './grid-multiple-items.controller';

export class GridMultipleItemsComponent implements ng.IComponentOptions {

    public bindings: {[binding: string]: string};
    public controller: ng.IControllerConstructor;
    public template: string;

    constructor() {
        this.bindings = {
            gridConfig: '=',
            formConfig: '=',
            items: '=',
            type: '=',
            canEdit: '=',
            maxItems: '='
        };

        this.controller = GridMultipleItemsController;

        this.template =  require('./grid-multiple-items.tpl');
    }
}

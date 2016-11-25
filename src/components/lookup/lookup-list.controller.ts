import { GridOptions } from '../data-grid/data-grid';

export class LookupListController implements ng.IComponentController {

    public options: GridOptions;
    public model: any;
    public mapping: any;

    constructor(
        private $mdDialog: ng.material.IDialogService,
        private _: _.LoDashStatic
    ) {
        'ngInject';

        this.options.gridType = 'selectable';
        this.options.selectAction = 'rowSelectedHandler';
    }

    public closeDialog = (): void => {
        this.$mdDialog.hide();
    };

    public rowSelectedHandler = (row: uiGrid.IGridRowOf<any>): void => {
        let mappedObject: any = {};
        this._.forOwn(this.mapping, (value: any, key: any) => {
            this.getMappedObject(value, row.entity[key], mappedObject);
        });
        // Merge model with the mapped object
        this._.merge(this.model, mappedObject);

        // Close dialog
        this.closeDialog();
    };

    private getMappedObject = (path: any, value: any, object: any): Object => {
        let tokens: any = path.split('.');
        let copy: any = object;
        while (tokens.length) {
            let token: string = tokens.shift();
            if (tokens.length > 0) {
                if (copy[token] === undefined) {
                    copy[token] = {};
                }
                copy = copy[token];
            }
            else {
                copy[token] = value;
            }
        }
        return object;
    };
}

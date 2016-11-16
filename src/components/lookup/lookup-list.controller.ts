export class LookupListController implements ng.IComponentController {

    public options: uiGrid.IGridOptions;
    public model: any;
    public mapping: any;

    constructor(
        private $mdDialog: ng.material.IDialogService,
        private _: _.LoDashStatic
    ) {
        'ngInject';

        this.options.enableRowHeaderSelection = false;
        this.options.enableFullRowSelection = true;
        this.options.multiSelect = false;

        this.options.onRegisterApi = (gridApi: uiGrid.IGridApiOf<any>): void => {
            // TODO: Seems wierd to pass null but it needs a scope.. passing 'this' is throwing error... :(
            gridApi.selection.on.rowSelectionChanged(null, this.rowSelectedHandler);
        };
    }

    public closeDialog = (): void => {
        this.$mdDialog.hide();
    };

    private rowSelectedHandler = (row: uiGrid.IGridRowOf<any>): void => {
        let mappedObject: any = {};
        this._.forOwn(this.mapping, (value: any, key: any) => {
            this.getMappedObject(value, row.entity[key], mappedObject);
        });
        // Extend model with the mapped object
        this._.extend(this.model, mappedObject);

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

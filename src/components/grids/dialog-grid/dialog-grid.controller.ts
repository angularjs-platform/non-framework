import { GridDataSource } from '../grids';

export class DialogGridController implements ng.IComponentController {

    public source: GridDataSource;
    public url: string;

    constructor(
        private $mdDialog: ng.material.IDialogService,
        private _: _.LoDashStatic
    ) {
        'ngInject';
        this.source = {
            url: this.url,
            additionalOptions: {
                gridType: 'selectable',
                selectAction: 'rowSelectedHandler'
            }
        };
    }

    public closeDialog = (): void => {
        this.$mdDialog.hide();
    };

    public rowSelectedHandler = (row: uiGrid.IGridRowOf<any>): void => {
        this.$mdDialog.hide(row.entity);
    };

}

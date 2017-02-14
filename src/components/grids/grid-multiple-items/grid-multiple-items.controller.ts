import { IDialogFormService } from '../../components.model';
import { IDataGridService, GridOptions } from '../grids';
import { GridMultipleItemConfig } from './grid-multiple-items';
import {Formly} from '../../forms/formly/formly';

const gridDefaultConfig: any =  require('./grid-multiple-items.grid-metadata.json');

export class GridMultipleItemsController implements ng.IComponentController {

    public gridConfig: GridOptions;
    public formConfig: Formly.IFieldArray;
    public config: GridMultipleItemConfig;
    public items: any;

    private editMode: boolean;

    constructor(
        private DataGridService: IDataGridService,
        private DialogFormService: IDialogFormService,
        private _: _.LoDashStatic,
        private $translate: any,
        private $mdDialog: ng.material.IDialogService,
        private $timeout: any
    ) {
        'ngInject';

        this.editMode = false;

        this.config = {
           gridConfig: gridDefaultConfig,
           formConfig: this.formConfig
        };

        // Setup grid columns from passed config
        if (this.gridConfig.columnDefs) {
            this.config.gridConfig.columnDefs.unshift(...this.gridConfig.columnDefs);
        }

        // Assign some values
        this.config.gridConfig.appScopeProvider = this;

        // Transform grid opitons into ui-grid specific
        this.DataGridService.transformGridOptions(this.config.gridConfig);

        // Transform column defs in ui-grid specific
        if (this.config.gridConfig.columnDefs) {
            this.DataGridService.transformColumns(this.config.gridConfig.columnDefs);
        }
    }

    public edit = (entity: any) : any => {
        this.editMode = true;
        this.openDialog(entity);
    };

    public delete = (entity: any) : any => {
        this.$mdDialog.show(
            this.$mdDialog.confirm()
                .title(this.$translate.instant('FORM_CONFIRMATION_DIALOG_TITLE_MESSAGE'))
                .textContent(this.$translate.instant('DELETE_LIST_ITEM_CONFIRMATION_DIALOG_SUBJECT_MESSAGE'))
                .ok(this.$translate.instant('OK'))
                .cancel(this.$translate.instant('CANCEL'))
        )
        .then((): void => {
            this._.remove(this.items, entity);
        });
    };

    public add = () : any => {
        this.editMode = false;
        this.openDialog({});
    };

    private openDialog = (data: any): any => {

        this.DialogFormService.open(this.config.formConfig, this._.cloneDeep(data))
            .then(this.handleDialogClose);
    };

    private handleDialogClose = (response: any): any => {
        // Update the grid data if saved in the opened dialog
        if (response) {
            if (!this.editMode) {
                this.items.push(response);
            }
            else {
                // Update existing item
                let item: any = this._.find(this.items, {$$hashKey: response.$$hashKey});
                this._.merge(item, response);
            }
        }
    };
}

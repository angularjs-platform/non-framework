import { FormConfiguration } from '../forms';

export class DialogFormController implements ng.IComponentController {

    public formConfig: FormConfiguration;
    public formFields: AngularFormly.IFieldArray;
    public formData: any;

    constructor(
        private $mdDialog: ng.material.IDialogService,
        private _: _.LoDashStatic
    ) {
        'ngInject';

        this.formConfig =  {
            model: this.formData,
            fields: this.formFields,
            options: {
                formState: {}
            }
        };
    }

    public saveData = (): void => {
        this.$mdDialog.hide(this.formConfig.model);
    }

    public closeDialog = (): void => {
        this.$mdDialog.hide();
    };

}

import { FormConfiguration } from '../../forms';
import {Formly} from '../../formly/formly';

export class GenericDialogFormController implements ng.IComponentController {

    public formConfig: FormConfiguration;
    public formFields: Formly.IFieldArray;
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

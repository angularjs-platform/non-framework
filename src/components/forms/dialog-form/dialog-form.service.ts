import { IDialogFormService } from './dialog-form';
import { DialogFormController } from './dialog-form.controller';

export class DialogFormService implements IDialogFormService {

    constructor(
        private $mdDialog: ng.material.IDialogService
    ) {
        'ngInject';
    }

    public open = (formConfig: any, formData: any): ng.IPromise<any> => {
        return this.$mdDialog.show({
            multiple: true,
            template: require('./dialog-form.tpl'),
            controller: DialogFormController,
            controllerAs : 'vm',
            bindToController: true,
            locals: {
                formFields: formConfig,
                formData: formData
            }
        });
    };
}

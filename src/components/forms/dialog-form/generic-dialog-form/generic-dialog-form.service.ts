import { IGenericDialogFormService } from './generic-dialog-form';
import { GenericDialogFormController } from './generic-dialog-form.controller';

export class GenericDialogFormService implements IGenericDialogFormService {

    constructor(
        private $mdDialog: ng.material.IDialogService
    ) {
        'ngInject';
    }

    public open = (formConfig: any, formData: any): ng.IPromise<any> => {
        return this.$mdDialog.show({
            multiple: true,
            template: require('./generic-dialog-form.tpl'),
            controller: GenericDialogFormController,
            controllerAs : 'vm',
            bindToController: true,
            locals: {
                formFields: formConfig,
                formData: formData
            }
        });
    };
}

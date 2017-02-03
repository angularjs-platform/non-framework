import { IDialogGridService } from './dialog-grid';
import { DialogGridController } from './dialog-grid.controller';

export class DialogGridService implements IDialogGridService {

    constructor(
        private $mdDialog: ng.material.IDialogService
    ) {
        'ngInject';
    }

    public open = (url: string): ng.IPromise<any> => {
        return this.$mdDialog.show({
            template: require('./dialog-grid.tpl'),
            controller: DialogGridController,
            // TODO: Actually implement CSS for .md-dialog-fullscreen class to make dialog fullscreen
            fullscreen: true,
            controllerAs: 'vm',
            bindToController: true,
            locals: {
                url: url
            }
        });
    };
}

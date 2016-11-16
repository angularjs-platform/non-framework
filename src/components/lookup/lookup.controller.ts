import {LookupListController} from './lookup-list.controller';

export class LookupController implements ng.IComponentController {

    public model: any;
    public mapping: any;
    public sourceData: any;
    public viewManager: any;
    public type: any;

    constructor(
        private $mdDialog: ng.material.IDialogService
    ) {
        'ngInject';

    }

    public search = () => {

        let dialogOptions: ng.material.IDialogOptions;

        dialogOptions = {
            template: require('./lookup-list.tpl'),
            controller: LookupListController,
            // TODO: Actually implement CSS for .md-dialog-fullscreen class to make dialog fullscreen
            fullscreen: true,
            controllerAs: 'vm',
            bindToController: true,
            locals: {
                options: this.getData(),
                mapping: this.mapping,
                model: this.model
            }
        };
        this.$mdDialog.show(dialogOptions);
    };

    private getData = (): any => {
        return this.viewManager[this.sourceData]();
    };


}

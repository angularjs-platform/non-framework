import { IDialogGridService } from '../components.model';

export class LookupController implements ng.IComponentController {

    public model: any;
    public mapping: any;
    public sourceData: any;
    public viewManager: any;
    public type: any;

    constructor(
        private DialogGridService: IDialogGridService,
        private $mdDialog: ng.material.IDialogService,
        private _: _.LoDashStatic
    ) {
        'ngInject';

    }

    public search = () => {
        this.DialogGridService.open(this.getSourceUrl())
            .then(this.handleDialogClose);
    };

    private getSourceUrl = (): any => {
        return this.viewManager[this.sourceData]();
    };

    private handleDialogClose = (response: any): any => {
        if (response) {
            // Map selected data back to the original model
            let mappedObject: any = {};
            this._.forOwn(this.mapping, (value: any, key: any) => {
                this.getMappedObject(value, response[key], mappedObject);
            });
            // Merge model with the mapped object
            this._.merge(this.model, mappedObject);
        }
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

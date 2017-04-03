import {Dashboard} from './dashboard';

export class DashboardService implements Dashboard.IDashboardService {

    public designedForm: {[formObjectGroupId: string]: FormBuilder.FormComponentObjectConfig[]};
    public generatedMetadataForm: {[formObjectGroupId: string]: FormBuilder.FormComponentObjectConfig[]};

    constructor(private _: _.LoDashStatic,
                public components: {[name: string]: Dashboard.DashboardComponentConfig}) {
        'ngInject';

        this.designedForm = {};
        this.generatedMetadataForm = {};
    }

    public createNewFormGroup = (formObjectGroupId: string): FormBuilder.FormComponentObjectConfig[] => {
        // Initialize
        if (!this._.isArray(this.designedForm[formObjectGroupId])) {
            this.designedForm[formObjectGroupId] = [];
        }

        return this.designedForm[formObjectGroupId];
    };

    public insertFormObject = (formObjectGroupId: string, index: number, formObject: FormBuilder.FormComponentObjectConfig): number => {

        // Reassign the index
        if (index > this.designedForm[formObjectGroupId].length) {
            index = this.designedForm[formObjectGroupId].length;
        }
        else if (index < 0) {
            index = 0;
        }

        // Add the formObject into the designedForm
        this.designedForm[formObjectGroupId].splice(index, 0, formObject);

        return index;
    };

    public removeFormObject = (formObjectGroupId: string, index: number): void => {
        this.designedForm[formObjectGroupId].splice(index, 1);
    };

    public deleteFormObject = (formObjectId: string, isWrapper: boolean): void => {
        let formObjectGroupId: string;
        let indexOfCurrentComponent: number;

        this._.forEach(this.designedForm, (formGroup: {}[], formGroupId: string): boolean =>  {
            indexOfCurrentComponent = this._.findIndex(formGroup, (formComponent: FormBuilder.FormComponentObjectConfig): boolean => {
                return formComponent.formObjectId === formObjectId;
            });

            if (indexOfCurrentComponent !== -1) {
                formObjectGroupId = formGroupId;
                return false;
            }
            else {
                return true;
            }
        });

        this.removeFormObject(formObjectGroupId, indexOfCurrentComponent);

        if (isWrapper) {
            this.designedForm[formObjectId] = null;
        }
    };
}

export class DashboardProvider implements Dashboard.IDashboardProvider {

    private components: {[name: string]: Dashboard.DashboardComponentConfig};

    constructor(private _: _.LoDashStatic) {
        'ngInject';

        this.components = {};
    }

    public registerComponent = (component: Dashboard.DashboardComponentConfig): void => {
        if (!this.components[component.name]) {
            this.components[component.name] = component;
        }
        else {
            console.error('Duplicate! The component ' + component.name + ' was already registered!');
        }
    };

    public $get = (): Dashboard.IDashboardService => {
        return new DashboardService(this._, this.components);
    };
}

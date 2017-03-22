import { FormConfiguration } from '../forms';
import { IFlexiFormService } from './flexi-form';

export class FlexiFormController implements ng.IComponentController {

    public configuration: FormConfiguration;
    public customSubmit: Function;
    public domainObject: string;

    constructor (
        private FlexiFormService: IFlexiFormService,
        private _: _.LoDashStatic
    ) {
        'ngInject';

        this.configuration.options = this.configuration.options || { formState: {} };
        this.configuration.options.formState.viewManager = this.configuration.options.formState.viewManager || {};

        // Inject flexi field specific methods
        this.configuration.options.formState.viewManager['getFlexiFormConfig'] = this.getFlexiFormConfig;
        this.configuration.options.formState.viewManager['isFieldVisible'] = this.isFieldVisible;
        this.configuration.options.formState.viewManager['getFieldValues'] = this.getFieldValues;
    }

    public getFlexiFormConfig = (): void => {
        if (!this._.isEmpty(this.configuration.model.presentation)) {
            this.configuration.model.flexiFormFields = this.FlexiFormService.getFlexiFormConfig(this.configuration.model.presentation.flexiFormFieldsConfig, this.configuration.model[this.domainObject]);
        }
    };

    public isFieldVisible = (field: string): boolean => {
        if (!this.configuration.model.flexiFormFields) {
            this.getFlexiFormConfig();
        }
        if (!this.FlexiFormService.isFieldVisible(field, this.configuration.model.flexiFormFields) && this.configuration.model[this.domainObject]) {
            this.configuration.model[this.domainObject][field] = null;
            return false;
        }
        return true;
    };

    public getFieldValues = (field: string): any => {
        return this.FlexiFormService.getFieldValues(field, this.configuration.model.flexiFormFields);
    };
}

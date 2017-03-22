import { IFlexiFormService, FlexiFormConfig, FlexiFormField } from './flexi-form';

export class FlexiFormService implements IFlexiFormService {

    constructor(
        private _: _.LoDashStatic
    ) {
        'ngInject';
    }

    public getFlexiFormConfig = (formConfig: FlexiFormConfig[], model: Object): FlexiFormField[] => {
        let formFields: FlexiFormField[] = [];
        if (!this._.isEmpty(model)) {
            let matchedConfigs: FlexiFormConfig[] = this._.filter(formConfig, (config: FlexiFormConfig) => this.configIsApplicable(config, model));
            this._.forEach(matchedConfigs, (config: FlexiFormConfig) => formFields.push(...config.fields));
        }
        return formFields;
    };

    public isFieldVisible = (fieldName: string, formFields: FlexiFormField[]): boolean => {
        return this._.some(formFields, {name: fieldName});
    };

    public getFieldValues = (fieldName: string, formFields: FlexiFormField[]): string[] => {
        let fieldConfig: FlexiFormField[] =  this._.filter(formFields, (field: FlexiFormField) => field.name === fieldName);
        if (fieldConfig.length > 0) {
            return fieldConfig[0].values;
        }
        return [];
    };

    private configIsApplicable = (config: FlexiFormConfig, model: Object): boolean => {
        let matching: boolean = true;

        this._.forEach(Object.keys(config), (key: any) => {
            if (!key.startsWith('fields')) {
                if (this._.isArray(config[key])) {
                    if (config[key].indexOf(model[key]) === -1) {
                        matching = false;
                    }
                }
                else if (config[key] !== model[key]) {
                    matching = false;
                }
            }
        });

        return matching;
    };
}

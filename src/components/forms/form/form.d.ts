import {Formly} from '../formly/formly';

export type FormConfiguration = {
    options?: IFormlyOptions;
    model?: Object;
    fields: Formly.IFieldArray;
}

export interface IFormDisplayState {
    create: string;
    update: string;
    view: string;
}

export interface IFormState {
    actionConfig?: IActionConfig;
    viewManager?: Object;
    validator?: Object;
    configObject?: Object;
    displayState?: string;
    triggerFormValidation?: boolean;
}

export interface IActionConfig {
    action : string;
    forwardToMethod?: string;
    endpointURL?: string;
    nextState?: string;
    hideConfirmation?: boolean;
    customConfirmation?: string;
    hideInvalidFormAlertDialog?: boolean;
    validateForm?: boolean;
}

export interface IFormlyOptions extends Formly.IFormOptionsAPI {
    formState: IFormState;
}

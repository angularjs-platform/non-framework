import {FormConfiguration, IActionConfig} from './form';
import {IGenericFormSubmissionService, IGenericFormValidationService, IConfigurationService} from '../../../core/core.model';


export class FormController implements ng.IComponentController {

    public configuration: FormConfiguration;
    public customSubmit: Function;
    public form: ng.IFormController;

    constructor (private $mdToast: ng.material.IToastService,
                 private $translate: ng.translate.ITranslateService,
                 private $mdDialog: any, /* TODO:G */
                 private GenericFormSubmissionService: IGenericFormSubmissionService,
                 private GenericFormValidationService: IGenericFormValidationService,
                 private ConfigurationService: IConfigurationService,
                 private $state: ng.ui.IStateService,
                 private $document: ng.IDocumentService) {
        'ngInject';
        this.configuration.options = this.configuration.options || { formState: {} };
        this.configuration.options.formState.configObject = this.ConfigurationService;
        this.configuration.options.formState.validator = this.configuration.options.formState.validator || {};
        this.configuration.options.formState.validator['GenericFormValidationService'] = this.GenericFormValidationService;
    }

    // Centralized FormSubmission
    public submit = ($event: any): void => {
        // If a custom-submit function is assigned to the non-form component then that will override the generic submission hooks
        if (this.customSubmit) {
            // Pass the FormController as a parameter to the customSubmit function
            this.customSubmit($event, this.form);
        }
        else {
            // Validate and Submit
            this.validateFormBeforeSubmit($event);
        }
    };

    private validateFormBeforeSubmit = ($event: any): void => {
        // ActionConfig defined on the submitbutton in the formly metadata
        const actionConfig: IActionConfig = this.configuration.options.formState.actionConfig;

        // Check if form validation is needed
        if (actionConfig.validateForm) {
            // Set flag to trigger form validation
            this.configuration.options.formState.triggerFormValidation = true;

            // If form valid then submit with confirmation
            if (this.form.$valid) {
                this.submitConfirmation($event);
            }
            else {
                $event.stopPropagation();
                $event.preventDefault();

                if (actionConfig.hideInvalidFormAlertDialog) {
                    // Show toaster error message
                    this.$mdToast.show(this.$mdToast.simple().textContent(this.$translate.instant('FORM.CORRECT_FORM_INPUT_ERRORS')));
                     // Set Focus on first invalid field
                    this.focusOnFirstInvalidElement();
                }
                else {
                    // Show Dialog error message
                    this.$mdDialog.show(
                        this.$mdDialog.alert()
                            .multiple(true)
                            .title(this.$translate.instant('FORM.CORRECT_FORM_INPUT_ERRORS'))
                            .ok(this.$translate.instant('BUTTON.OK')))
                            .then((): void => {
                                // Set Focus on first invalid field
                                this.focusOnFirstInvalidElement();
                            }
                    );
                }
            }
        }
        // Else Submit without validation
        else {
            this.submitConfirmation($event);
        }
    };

    private focusOnFirstInvalidElement = (): void => {
        // TODO:G Enhance this to focus on all kinds of Form Elements not just elements wrapped in md-input-conatiner
        const firstInvalidElement: HTMLElement = <HTMLElement>this.$document[0].querySelector('form.ng-invalid md-input-container .ng-invalid');
        if (firstInvalidElement) {
            firstInvalidElement.focus();
        }
    };

    private submitConfirmation = ($event: any): void => {
        // ActionConfig defined on the submitbutton in the formly metadata
        const actionConfig: IActionConfig = this.configuration.options.formState.actionConfig;

        let actionDialogSubjectLocaleKey: string = actionConfig.action + '_FORM_CONFIRMATION_DIALOG_SUBJECT_MESSAGE';

        if (actionConfig.customConfirmation) {
            actionDialogSubjectLocaleKey = actionConfig.customConfirmation;
        }

        if (actionConfig.hideConfirmation) {
            this.submitForm($event);
        }
        else {
            this.$mdDialog.show(this.$mdDialog.confirm()
                .multiple(true)
                .title(this.$translate.instant('FORM.FORM_CONFIRMATION_DIALOG_TITLE_MESSAGE'))
                .textContent(this.$translate.instant(actionDialogSubjectLocaleKey))
                .ok(this.$translate.instant('BUTTON.OK'))
                .cancel(this.$translate.instant('BUTTON.CANCEL')))
                .then((): void => {
                    this.submitForm($event);
                }, (): void => {
                    console.log('Canceled form submission');
                }
            );

        }
    };

    private submitForm = ($event: any): void => {
        // ActionConfig defined on the submitbutton in the formly metadata
        const actionConfig: IActionConfig = this.configuration.options.formState.actionConfig;

        // Parent Controller (View Manager) of the Form
        const viewManager: Object = this.configuration.options.formState.viewManager;

        // Call the Parent Controller's method specified by forwardToMethod
        if (actionConfig.forwardToMethod) {
            viewManager[actionConfig.forwardToMethod](this.form);
        }
        // Else call the endpoint using the GenericFormSubmissionService
        else if (actionConfig.endpointURL && actionConfig.nextState) {
            let payload: {} = this.configuration.model;

            // When payload is more than just the plain model, use this to configure the payload
            if (actionConfig.createPayloadMethod) {
                payload = viewManager[actionConfig.createPayloadMethod](this.form, this.configuration.model);
            }

            this.GenericFormSubmissionService.submit(actionConfig.endpointURL, payload)
                .then(
                    // Success
                    () => this.$state.go(actionConfig.nextState),
                    // Error
                    () => this.$mdToast.show(this.$mdToast.simple().textContent(this.$translate.instant('FORM.SUBMISSION_ERROR'))));
        }
        // Else error
        else {
            console.error('Define actionConfig.forwardToMethod or actionConfig.endpointURL for the clicked button!');
        }
    };
}

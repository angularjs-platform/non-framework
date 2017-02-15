import * as angular from 'angular';

const moduleName: string = 'non.framework.components.forms.formly';

// Widgets
import inputWidget from './widgets/input/input.module';
import checkboxWidget from './widgets/checkbox/checkbox.module';
import radiobuttonWidget from './widgets/radiobutton/radiobutton.module';
import selectWidget from './widgets/select/select.module';
import switchWidget from './widgets/switch/switch.module';
import textareaWidget from './widgets/textarea/textarea.module';
import datepickerWidget from './widgets/datepicker/datepicker.module';
import buttonWidget from './widgets/button/button.module';

import multiSelectWidget from './widgets/multiselect/multiselect.module';
import submitButtonWidget from './widgets/submit-button/submit-button.module';
import lookupWidget from './widgets/lookup/lookup.module';
import divider from './widgets/divider/divider.module';
import gridMultipleItemsWidget from './widgets/gridmultipleitems/gridmultipleitems.module';

// Widget Wrappers
import labelWrapper from './widget-wrappers/label/label.module';
import fieldsetWrapper from './widget-wrappers/fieldset/fieldset.module';
import fieldwrapper from './widget-wrappers/fieldwrapper/fieldwrapper.module';
import mdInputContainer from './widget-wrappers/md-input-container/md-input-container.module';
import validationMessages from './widget-wrappers/validation-messages/validation-messages.module';

// Global Formly Config
import {FormlyConfig} from './formly.config';

angular.module(moduleName, ['formly', inputWidget, checkboxWidget, radiobuttonWidget,
                    selectWidget, switchWidget, textareaWidget, datepickerWidget, buttonWidget, submitButtonWidget,
                    multiSelectWidget, lookupWidget, divider, gridMultipleItemsWidget,
                    labelWrapper, mdInputContainer, validationMessages, fieldsetWrapper, fieldwrapper])
    .config(FormlyConfig);

export default moduleName;

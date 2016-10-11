const moduleName: string = 'non.framework.components.forms.formly';

// Widgets
import inputWidget from './widgets/input/input.module';
import checkboxWidget from './widgets/checkbox/checkbox.module';
import radiobuttonWidget from './widgets/radiobutton/radiobutton.module';
import selectWidget from './widgets/select/select.module';
import switchWidget from './widgets/switch/switch.module';
import textareaWidget from './widgets/textarea/textarea.module';
import datepickerWidget from './widgets/datepicker/datepicker.module';

// Widget Wrappers
import labelWrapper from './widget-wrappers/label/label.module';
import mdInputContainer from './widget-wrappers/md-input-container/md-input-container.module';
import validationMessages from './widget-wrappers/validation-messages/validation-messages.module';

// Global Formly Config
import {FormlyConfig} from './formly.config';

angular.module(moduleName, ['formly', inputWidget, checkboxWidget, radiobuttonWidget,
                    selectWidget, switchWidget, textareaWidget, datepickerWidget,
                    labelWrapper, mdInputContainer, validationMessages])
    .config(FormlyConfig);

export default moduleName;
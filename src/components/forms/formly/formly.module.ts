const moduleName: string = 'non.framework.components.forms.formly';

// Widgets
import inputWidget from './widgets/input/input.module';

// Widget Wrappers
import labelWrapper from './widget-wrappers/label/label.module';
import mdInputContainer from './widget-wrappers/md-input-container/md-input-container.module';
import validationMessages from './widget-wrappers/validation-messages/validation-messages.module';

// Global Formly Config
import {FormlyConfig} from './formly.config';

angular.module(moduleName, ['formly', inputWidget, labelWrapper, mdInputContainer, validationMessages])
    .config(FormlyConfig);

export default moduleName;

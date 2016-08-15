const moduleName: string = 'non.framework.components.forms.accessible-form';

import accessibleFormDirective from './accessible-form.directive';

angular.module(moduleName, [])
    .directive('nonAccessibleForm', accessibleFormDirective);

export default moduleName;

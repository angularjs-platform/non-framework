const moduleName: string = 'non.framework.components';

import navigation from './navigation/navigation.module';
import dataGrid from './data-grid/data-grid.module';
import multiSelect from './multi-select/multi-select.module';
import forms from './forms/forms.module';
import lookup from './lookup/lookup.module';
import breadcrumb from './breadcrumb/breadcrumb.module';
import pageContentWrapper from './page-content-wrapper/page-content-wrapper.module';

angular.module(moduleName, [navigation, dataGrid, forms, multiSelect, lookup, breadcrumb, pageContentWrapper]);

export default moduleName;

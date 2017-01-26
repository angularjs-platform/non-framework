import { FormConfiguration } from '../../components.model';
import { GridOptions } from '../grids';

export interface GridMultipleItemConfig {
    gridConfig: GridOptions;
    formConfig: AngularFormly.IFieldArray;
}

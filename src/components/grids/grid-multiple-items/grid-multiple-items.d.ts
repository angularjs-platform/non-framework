import { FormConfiguration, Formly } from '../../components.model';
import { GridOptions } from '../grids';

export interface GridMultipleItemConfig {
    gridConfig: GridOptions;
    formConfig?: Formly.IFieldArray;
}

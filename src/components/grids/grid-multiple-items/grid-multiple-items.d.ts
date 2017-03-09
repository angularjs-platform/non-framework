import { FormConfiguration } from '../../components.model';
import { GridOptions } from '../grids';
import {Formly} from '../../forms/formly/formly';

export interface GridMultipleItemConfig {
    gridConfig: GridOptions;
    formConfig?: Formly.IFieldArray;
}

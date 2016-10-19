import {MultiSelectOption} from './multi-select';

export class MultiSelectController implements ng.IComponentController {

    public source: MultiSelectOption[];
    public target: MultiSelectOption[];

    constructor(private _: _.LoDashStatic) {
        // empty
    }

    public add = (itemList: MultiSelectOption[]): any => {
        this.move(this.source, this.target, itemList);
    };

    public remove = (itemList: MultiSelectOption[]): any => {
        this.move(this.target, this.source, itemList);
    };

    private move = (sourceList: MultiSelectOption[], targetList: MultiSelectOption[], itemList: MultiSelectOption[]): any => {

        // Remove from source list
        this._.remove(sourceList, (item: MultiSelectOption): any => {
            return itemList.indexOf(item) > -1;
        });

        // Add to target list
        this._.forEach(itemList, (item: MultiSelectOption): void => {
            targetList.push(item);
        });
    };

}

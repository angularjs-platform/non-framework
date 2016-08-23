import { IDataGridService, GridColumn, ButtonOptions } from './data-grid';

export class DataGridService implements IDataGridService {

    constructor(private $translate: ng.translate.ITranslateService) {
        'ngInject';
    }

    public getTranslatedValue = (translationKey: string) => {
        return this.$translate.instant(translationKey);
    };

    public transformColumns = (columns: GridColumn[]): void => {

        columns.forEach((column: GridColumn): void => {

            // Get translated name
            column.displayName = this.getTranslatedValue(column.labelKey);

            // Remove the hiding option from column menu
            column.enableHiding = false;

            // Transform into html template
            if (column.type === 'button') {
                column.cellTemplate = this.buildButtonTemplate(column.options);
                column.enableSorting = false;
                column.enableFiltering = false;
                column.enableColumnMenu = false;
            }
        });
    };

    private buildButtonTemplate = (buttonOptions: ButtonOptions): string => {

        let template: string = '<md-button class="md-raised md-primary" ng-click="grid.appScope.' +
                                    buttonOptions.action + '(row.entity)">' +
                                    this.getTranslatedValue(buttonOptions.buttonLabel) + '</md-button>';
        return template;

    };
}

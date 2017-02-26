export class FormlyConfig {
    // TODO:G Cant use AngularFormly.IFormlyConfig typedef bcoz apiCheck needs to be a function for the code to work. However type def checks for a object
    constructor(private formlyConfigProvider: any) {
        'ngInject';

        this.formlyConfigProvider.setType({
            name: 'multipleattachments',
            extends: 'gridmultipleitems',
            defaultOptions: {
                templateOptions: {
                    type: 'attachment',
                    canEdit: false,
                    gridConfig: {
                        columnDefs : [
                            {
                                name : 'name',
                                labelKey : 'NAME',
                                visible : true,
                                type : null,
                                options : null
                            },
                            {
                                name : 'attachmentId',
                                visible : false,
                                type : null,
                                options : null
                            }
                        ]
                    }
                }
            }
        });
    }
}

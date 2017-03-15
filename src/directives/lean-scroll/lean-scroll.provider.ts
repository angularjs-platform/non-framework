import * as angular from 'angular';

import {ILeanScrollService} from './lean-scroll';

export class LeanScrollService implements ILeanScrollService {

    constructor(private defaultConfiguration: any) {
        'ngInject';

    }

    public getConfig = () : void => {
        return this.defaultConfiguration;
    }
}

export class LeanScrollProvider implements ng.IServiceProvider {

    public defaultConfiguration: any;

    constructor() {
        this.defaultConfiguration = {
            wheelSpeed            : 1,
            wheelPropagation      : false,
            swipePropagation      : true,
            minScrollbarLength    : null,
            maxScrollbarLength    : null,
            useBothWheelAxes      : false,
            useKeyboard           : true,
            suppressScrollX       : false,
            suppressScrollY       : false,
            scrollXMarginOffset   : 0,
            scrollYMarginOffset   : 0,
            stopPropagationOnClick: true
        };
    }

    public $get = (): ILeanScrollService => {
        return new LeanScrollService(this.defaultConfiguration);
    };

    public config = (configuration: any) : void => {
        this.defaultConfiguration = angular.extend({}, this.defaultConfiguration, configuration);
    }
}

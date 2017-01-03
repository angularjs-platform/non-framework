export type menuItem = {
    id: string;
    title: string;
    url: string;
    ref: string;
    active?: boolean;
}

export interface IState extends ng.ui.IState {
    ncyBreadcrumb?: {
        label?: string;
        parent?: string|Function;
        skip?: boolean;
    };
    ncyBreadcrumbLabel?: string;
    ncyBreadcrumbLink?: string;
    secondaryMenuId?: string;
}

export interface IStateProvider extends angular.IServiceProvider{
    state(name:string, config:IState): IStateProvider;
    state(config:IState): IStateProvider;
    decorator(name?: string, decorator?: (state: IState, parent: Function) => any): any;
}

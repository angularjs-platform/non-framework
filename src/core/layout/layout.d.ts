export interface ILayoutService {
    getPrimaryLayoutType(): string;
    getSecondaryLayoutType(): string;
    isMobile(): boolean;
}

export interface ILayoutProvider extends ng.IServiceProvider {
    setPrimaryLayouts(primaryLayouts: any): void;
    setSecondaryLayouts(secondaryLayouts: any): void;
    getPrimaryLayoutFromType(layoutType: string): string;
    getSecondaryLayoutFromType(layoutType: string): string;
    getPrimaryLayout(): string;
    getSecondaryLayout(): string;
}

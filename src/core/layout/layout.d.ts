export interface ILayoutService {
    getPrimaryLayoutType(): string;
    setPrimaryLayoutType(primaryLayoutType: any): void;
    getSecondaryLayoutType(): string;
    setSecondaryLayoutType(secondaryLayoutType: any): void;
    isMobile(): boolean;
}


export interface IMenuService {

    getPrimaryMenuList(): {};
    getSecondaryMenuList(): {};
    setPrimaryMenuList(primaryMenuList: {}): void;
    setSecondaryMenuList(secondaryMenuList: {}): void;
    setSecondaryMenuListID(id: string): void;
}


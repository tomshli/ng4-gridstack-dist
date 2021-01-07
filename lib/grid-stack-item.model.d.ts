export declare class GridStackItem {
    x: number;
    y: number;
    height: number;
    width: number;
    maxHeight?: number | undefined;
    minHeight?: number | undefined;
    maxWidth?: number | undefined;
    minWidth?: number | undefined;
    noResize: boolean;
    noMove?: boolean | undefined;
    autoPosition?: boolean;
    visible?: boolean;
    locked?: boolean | undefined;
    el?: any;
    itemId?: string;
    static Clone(widget: GridStackItem): GridStackItem;
}

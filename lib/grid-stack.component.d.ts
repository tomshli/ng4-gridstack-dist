import { QueryList, ElementRef, Renderer2, AfterContentInit } from '@angular/core';
import { GridStackOptions } from './grid-stack-options.model';
import { GridStackItemComponent } from './grid-stack-item.component';
import 'gridstack';
export declare class GridStackComponent implements AfterContentInit {
    private el;
    private renderer;
    options: GridStackOptions;
    items: QueryList<GridStackItemComponent>;
    private gridStack;
    private grid;
    constructor(el: ElementRef, renderer: Renderer2);
    makeWidget(item: GridStackItemComponent): void;
    updateWidget(item: GridStackItemComponent): void;
    enableMove(doEnable: boolean, includeNewWidgets: boolean): void;
    AddWidget(item: GridStackItemComponent): void;
    RemoveWidget(item: GridStackItemComponent): void;
    ngAfterContentInit(): void;
    private widgetChanged;
}

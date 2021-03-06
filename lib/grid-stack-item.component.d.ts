import { OnInit, ComponentRef, ElementRef, Renderer2, EventEmitter, OnDestroy, AfterViewInit, ViewContainerRef } from '@angular/core';
import { GridStackItem } from './grid-stack-item.model';
export declare class GridStackItemComponent implements OnInit, OnDestroy, AfterViewInit {
    private el;
    private renderer;
    contentPlaceholder: ViewContainerRef;
    contentTemplate: string;
    option: GridStackItem;
    onGridConfigurationChanged: EventEmitter<GridStackItem>;
    contentComponentRef: ComponentRef<any>;
    jGridRef: any;
    jWidgetRef: any;
    constructor(el: ElementRef, renderer: Renderer2);
    get nativeElement(): HTMLElement;
    ngOnInit(): void;
    UpdateWidget(item: GridStackItem): void;
    RenderWidget(item: GridStackItem): void;
    update(x: number, y: number, width: number, height: number): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}

import { EventEmitter, Component, ElementRef, Renderer2, ViewChild, ViewContainerRef, Input, Output, ContentChildren, Directive, Pipe, Injectable, NgModule } from '@angular/core';
import * as jqueryProxy from 'jquery';
import jqueryProxy__default from 'jquery';
import { each } from 'lodash';
import 'gridstack';
import { CommonModule } from '@angular/common';

class GridStackOptions {
}

class GridStackItem {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.height = 1;
        this.width = 1;
        this.noResize = false;
        this.autoPosition = false;
        this.visible = true;
    }
    static Clone(widget) {
        var result = new GridStackItem();
        result.autoPosition = widget.autoPosition;
        result.itemId = widget.itemId;
        result.el = widget.el;
        result.height = widget.height;
        result.locked = widget.locked;
        result.maxHeight = widget.maxHeight;
        result.maxWidth = widget.maxWidth;
        result.minHeight = widget.minHeight;
        result.minWidth = widget.minWidth;
        result.noMove = widget.noMove;
        result.noResize = widget.noResize;
        result.width = widget.width;
        result.x = widget.x;
        result.y = widget.y;
        return result;
    }
}

class GridStackItemComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.onGridConfigurationChanged = new EventEmitter();
        this.contentComponentRef = null;
        this.jGridRef = null;
        this.jWidgetRef = null;
        this.jWidgetRef = el.nativeElement;
    }
    get nativeElement() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        this.RenderWidget(null);
    }
    UpdateWidget(item) {
    }
    RenderWidget(item) {
        let renderer = this.renderer;
        if (item != null)
            this.option = item;
        String(this.option.x) == null ? this.renderer.removeAttribute(this.nativeElement, "data-gs-x") : this.renderer.setAttribute(this.nativeElement, "data-gs-x", String(this.option.x));
        String(this.option.y) == null ? this.renderer.removeAttribute(this.nativeElement, "data-gs-y") : this.renderer.setAttribute(this.nativeElement, "data-gs-y", String(this.option.y));
        String(this.option.width) == null ? this.renderer.removeAttribute(this.nativeElement, "data-gs-width") : this.renderer.setAttribute(this.nativeElement, "data-gs-width", String(this.option.width));
        String(this.option.height) == null ? this.renderer.removeAttribute(this.nativeElement, "data-gs-height") : this.renderer.setAttribute(this.nativeElement, "data-gs-height", String(this.option.height));
        //this.renderer.setElementAttribute(this.nativeElement, "data-gs-x", String(this.option.x));
        //this.renderer.setElementAttribute(this.nativeElement, "data-gs-y", String(this.option.y));
        //this.renderer.setElementAttribute(this.nativeElement, "data-gs-width", String(this.option.width));
        //this.renderer.setElementAttribute(this.nativeElement, "data-gs-height", String(this.option.height));
        if (this.option.minWidth) {
            String(this.option.minWidth) == null ? this.renderer.removeAttribute(this.nativeElement, "data-gs-min-width") : this.renderer.setAttribute(this.nativeElement, "data-gs-min-width", String(this.option.minWidth));
            //renderer.setElementAttribute(this.nativeElement, "data-gs-min-width", String(this.option.minWidth));
        }
        if (this.option.noResize != null && this.option.noResize == true) {
            "yes" == null ? this.renderer.removeAttribute(this.nativeElement, "data-gs-no-resize") : this.renderer.setAttribute(this.nativeElement, "data-gs-no-resize", "yes");
            //renderer.setElementAttribute(this.nativeElement, "data-gs-no-resize", "yes");
        }
        if (this.option.visible === false) {
            this.renderer.addClass(this.nativeElement, "hidden");
            //this.renderer.setElementClass(this.nativeElement, "hidden", true);
        }
        if (this.option.itemId) {
            this.option.itemId == null ? this.renderer.removeAttribute(this.nativeElement, "data-item-id") : this.renderer.setAttribute(this.nativeElement, "data-item-id", this.option.itemId);
            //this.renderer.setElementAttribute(this.nativeElement, "data-item-id", this.option.itemId);
        }
    }
    update(x, y, width, height) {
        // console.log("here");
        if (x === this.option.x && y === this.option.y && width === this.option.width && height === this.option.height)
            return;
        if (this.option != null) {
            this.option.x = x;
            this.option.y = y;
            this.option.width = width;
            this.option.height = height;
            var optionNew = GridStackItem.Clone(this.option);
            this.onGridConfigurationChanged.emit(optionNew);
        }
    }
    ngAfterViewInit() {
        //if (!!this.contentTemplate) {
        //    this.componentService.getDynamicComponentFactory({
        //        selector: `grid-stack-item-${Date.now()}`,
        //        template: this.contentTemplate
        //    })
        //        .then(factory => {
        //            this.contentComponentRef = this.contentPlaceholder.createComponent(factory);
        //        })
        //}
    }
    ngOnDestroy() {
        if (this.contentComponentRef !== null)
            this.contentComponentRef.destroy();
    }
}
GridStackItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'grid-stack-item',
                template: `<div class="grid-stack-item-content">
              <div #contentPlaceholder *ngIf="contentTemplate"></div>
              <ng-content *ngIf="!contentTemplate"></ng-content>
            </div>`
            },] }
];
GridStackItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
GridStackItemComponent.propDecorators = {
    contentPlaceholder: [{ type: ViewChild, args: ["contentPlaceholder", { read: ViewContainerRef },] }],
    contentTemplate: [{ type: Input }],
    option: [{ type: Input }],
    onGridConfigurationChanged: [{ type: Output }]
};

const jquery = jqueryProxy__default || jqueryProxy;
class GridStackComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.options = new GridStackOptions();
        this.gridStack = null;
        this.grid = null;
    }
    makeWidget(item) {
        //let widget = this.grid.makeWidget(item.nativeElement);
        item.jGridRef = this.grid;
        //item.jWidgetRef = widget;
        if (item.option != null && item.option.noResize != null && item.option.noResize == true)
            return;
        this.grid.resizable(item.nativeElement, true);
        this.grid.move(item.nativeElement, item.option.x, item.option.y);
        this.grid.resize(item.nativeElement, item.option.width, item.option.height);
    }
    ;
    updateWidget(item) {
        this.grid.resizable(item.nativeElement, true);
        this.grid.move(item.nativeElement, item.option.x, item.option.y);
        this.grid.resize(item.nativeElement, item.option.width, item.option.height);
    }
    enableMove(doEnable, includeNewWidgets) {
        this.grid.enableMove(doEnable, includeNewWidgets);
    }
    AddWidget(item) {
        let widget = this.grid.makeWidget(item.nativeElement);
        item.jGridRef = this.grid;
        //item.jWidgetRef = widget;
        if (item.option != null && item.option.noResize != null && item.option.noResize == true)
            return;
        this.grid.resizable(item.nativeElement, true);
        this.grid.move(item.nativeElement, item.option.x, item.option.y);
        this.grid.resize(item.nativeElement, item.option.width, item.option.height);
    }
    RemoveWidget(item) {
        let widget = this.grid.removeWidget(item.nativeElement, false);
    }
    ngAfterContentInit() {
        var that = this;
        let nativeElement = this.el.nativeElement;
        if (this.options == null)
            this.options = new GridStackOptions();
        if (this.options.cellHeight == null)
            this.options.cellHeight = 60;
        if (this.options.width == null)
            this.options.width = 12;
        if (this.options.height == null)
            this.options.height = 0;
        if (this.options.animate == null)
            this.options.animate = true;
        if (this.options.float == null)
            this.options.float = false;
        if (this.options.resizable == null)
            this.options.resizable = true;
        String(this.options.width) == null ? this.renderer.removeAttribute(nativeElement, "data-gs-width") : this.renderer.setAttribute(nativeElement, "data-gs-width", String(this.options.width));
        String(this.options.height) == null ? this.renderer.removeAttribute(nativeElement, "data-gs-height") : this.renderer.setAttribute(nativeElement, "data-gs-height", String(this.options.height));
        //this.renderer.setElementAttribute(nativeElement, "data-gs-width", String(this.options.width));
        //this.renderer.setElementAttribute(nativeElement, "data-gs-height", String(this.options.height));
        this.gridStack = jquery(nativeElement).gridstack(this.options);
        this.grid = this.gridStack.data("gridstack");
        this.gridStack.on("change", (e, items) => {
            each(items, (item) => this.widgetChanged(item));
        });
        // Initialize widgets
        this.items.forEach(item => that.makeWidget(item));
    }
    widgetChanged(change) {
        console.log(change);
        //  debugger;
        //console.log(change);
        var jWidget = change.el;
        var gridStackItem = this.items.find(item => item.jWidgetRef !== null ? item.jWidgetRef === jWidget[0] : false);
        if (!gridStackItem)
            return;
        gridStackItem.update(change.x, change.y, change.width, change.height);
    }
}
GridStackComponent.decorators = [
    { type: Component, args: [{
                selector: 'grid-stack',
                template: `<ng-content></ng-content>`,
                styles: [":host { display: block; }"]
            },] }
];
GridStackComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
GridStackComponent.propDecorators = {
    options: [{ type: Input }],
    items: [{ type: ContentChildren, args: [GridStackItemComponent,] }]
};

class GridStackDirective {
    constructor(el) {
        this.el = el;
    }
}
GridStackDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gridStackDirective]'
            },] }
];
GridStackDirective.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * Transforms any input value
 */
class GridStackPipe {
    transform(value, args = null) {
        return value;
    }
}
GridStackPipe.decorators = [
    { type: Pipe, args: [{
                name: 'gridStackPipe'
            },] },
    { type: Injectable }
];

class GridStackModule {
}
GridStackModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    GridStackComponent,
                    GridStackItemComponent,
                    GridStackDirective,
                    GridStackPipe
                ],
                exports: [
                    GridStackComponent,
                    GridStackItemComponent,
                    GridStackDirective,
                    GridStackPipe
                ]
            },] }
];

/*
 * Public API Surface of ng4-gridstack
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GridStackComponent, GridStackDirective, GridStackItem, GridStackItemComponent, GridStackModule, GridStackOptions, GridStackPipe };
//# sourceMappingURL=ng4-gridstack.js.map

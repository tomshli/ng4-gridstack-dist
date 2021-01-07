import { Component, ContentChildren, Directive, ElementRef, EventEmitter, Injectable, Input, NgModule, Output, Pipe, QueryList, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'gridstack/dist/gridstack';
import * as jqueryProxy from 'jquery';
import jqueryProxy__default from 'jquery';
import { each } from 'lodash';

var GridStackOptions = /** @class */ (function () {
    function GridStackOptions() {
    }
    return GridStackOptions;
}());

var GridStackItem = /** @class */ (function () {
    function GridStackItem() {
        this.x = 0;
        this.y = 0;
        this.height = 1;
        this.width = 1;
        this.noResize = false;
        this.autoPosition = false;
        this.visible = true;
    }
    GridStackItem.Clone = function (widget) {
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
    };
    return GridStackItem;
}());

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var GridStackItemComponent = /** @class */ (function () {
    function GridStackItemComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.onGridConfigurationChanged = new EventEmitter();
        this.contentComponentRef = null;
        this.jGridRef = null;
        this.jWidgetRef = null;
        this.jWidgetRef = el.nativeElement;
    }
    Object.defineProperty(GridStackItemComponent.prototype, "nativeElement", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    GridStackItemComponent.prototype.ngOnInit = function () {
        this.RenderWidget(null);
    };
    GridStackItemComponent.prototype.UpdateWidget = function (item) {
    };
    GridStackItemComponent.prototype.RenderWidget = function (item) {
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
            this.renderer.setAttribute(this.nativeElement, "data-gs-no-resize", "yes");
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
    };
    GridStackItemComponent.prototype.update = function (x, y, width, height) {
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
    };
    GridStackItemComponent.prototype.ngAfterViewInit = function () {
        //if (!!this.contentTemplate) {
        //    this.componentService.getDynamicComponentFactory({
        //        selector: `grid-stack-item-${Date.now()}`,
        //        template: this.contentTemplate
        //    })
        //        .then(factory => {
        //            this.contentComponentRef = this.contentPlaceholder.createComponent(factory);
        //        })
        //}
    };
    GridStackItemComponent.prototype.ngOnDestroy = function () {
        if (this.contentComponentRef !== null)
            this.contentComponentRef.destroy();
    };
    __decorate$2([
        ViewChild("contentPlaceholder", { read: ViewContainerRef }),
        __metadata$1("design:type", ViewContainerRef)
    ], GridStackItemComponent.prototype, "contentPlaceholder", void 0);
    __decorate$2([
        Input(),
        __metadata$1("design:type", String)
    ], GridStackItemComponent.prototype, "contentTemplate", void 0);
    __decorate$2([
        Input(),
        __metadata$1("design:type", GridStackItem)
    ], GridStackItemComponent.prototype, "option", void 0);
    __decorate$2([
        Output(),
        __metadata$1("design:type", Object)
    ], GridStackItemComponent.prototype, "onGridConfigurationChanged", void 0);
    GridStackItemComponent = __decorate$2([
        Component({
            selector: 'grid-stack-item',
            template: "<div class=\"grid-stack-item-content\">\n              <div #contentPlaceholder *ngIf=\"contentTemplate\"></div>\n              <ng-content *ngIf=\"!contentTemplate\"></ng-content>\n            </div>"
        }),
        __metadata$1("design:paramtypes", [ElementRef, Renderer2])
    ], GridStackItemComponent);
    return GridStackItemComponent;
}());

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var jquery = jqueryProxy__default || jqueryProxy;
var GridStackComponent = /** @class */ (function () {
    function GridStackComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.options = new GridStackOptions();
        this.gridStack = null;
        this.grid = null;
    }
    GridStackComponent.prototype.makeWidget = function (item) {
        //let widget = this.grid.makeWidget(item.nativeElement);
        item.jGridRef = this.grid;
        //item.jWidgetRef = widget;
        if (item.option != null && item.option.noResize != null && item.option.noResize == true)
            return;
        this.grid.resizable(item.nativeElement, true);
        this.grid.move(item.nativeElement, item.option.x, item.option.y);
        this.grid.resize(item.nativeElement, item.option.width, item.option.height);
    };
    
    GridStackComponent.prototype.updateWidget = function (item) {
        this.grid.resizable(item.nativeElement, true);
        this.grid.move(item.nativeElement, item.option.x, item.option.y);
        this.grid.resize(item.nativeElement, item.option.width, item.option.height);
    };
    GridStackComponent.prototype.enableMove = function (doEnable, includeNewWidgets) {
        this.grid.enableMove(doEnable, includeNewWidgets);
    };
    GridStackComponent.prototype.AddWidget = function (item) {
        var widget = this.grid.makeWidget(item.nativeElement);
        item.jGridRef = this.grid;
        //item.jWidgetRef = widget;
        if (item.option != null && item.option.noResize != null && item.option.noResize == true)
            return;
        this.grid.resizable(item.nativeElement, true);
        this.grid.move(item.nativeElement, item.option.x, item.option.y);
        this.grid.resize(item.nativeElement, item.option.width, item.option.height);
    };
    GridStackComponent.prototype.RemoveWidget = function (item) {
        var widget = this.grid.removeWidget(item.nativeElement, false);
    };
    GridStackComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        var that = this;
        var nativeElement = this.el.nativeElement;
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
        this.gridStack.on("change", function (e, items) {
            each(items, function (item) { return _this.widgetChanged(item); });
        });
        // Initialize widgets
        this.items.forEach(function (item) { return that.makeWidget(item); });
    };
    GridStackComponent.prototype.widgetChanged = function (change) {
        console.log(change);
        //  debugger;
        //console.log(change);
        var jWidget = change.el;
        var gridStackItem = this.items.find(function (item) { return item.jWidgetRef !== null ? item.jWidgetRef === jWidget[0] : false; });
        if (!gridStackItem)
            return;
        gridStackItem.update(change.x, change.y, change.width, change.height);
    };
    __decorate$1([
        Input(),
        __metadata("design:type", GridStackOptions)
    ], GridStackComponent.prototype, "options", void 0);
    __decorate$1([
        ContentChildren(GridStackItemComponent),
        __metadata("design:type", QueryList)
    ], GridStackComponent.prototype, "items", void 0);
    GridStackComponent = __decorate$1([
        Component({
            selector: 'grid-stack',
            template: "<ng-content></ng-content>",
            styles: [":host { display: block; }"]
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], GridStackComponent);
    return GridStackComponent;
}());

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var GridStackDirective = /** @class */ (function () {
    function GridStackDirective(el) {
        this.el = el;
    }
    GridStackDirective = __decorate$3([
        Directive({
            selector: '[gridStackDirective]'
        }),
        __metadata$2("design:paramtypes", [ElementRef])
    ], GridStackDirective);
    return GridStackDirective;
}());

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Transforms any input value
 */
var GridStackPipe = /** @class */ (function () {
    function GridStackPipe() {
    }
    GridStackPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return value;
    };
    GridStackPipe = __decorate$4([
        Pipe({
            name: 'gridStackPipe'
        }),
        Injectable()
    ], GridStackPipe);
    return GridStackPipe;
}());

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var GridStackService = /** @class */ (function () {
    function GridStackService() {
    }
    GridStackService = __decorate$5([
        Injectable(),
        __metadata$3("design:paramtypes", [])
    ], GridStackService);
    return GridStackService;
}());

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GridStackModule = /** @class */ (function () {
    function GridStackModule() {
    }
    GridStackModule_1 = GridStackModule;
    GridStackModule.forRoot = function () {
        return {
            ngModule: GridStackModule_1,
            providers: [GridStackService]
        };
    };
    var GridStackModule_1;
    GridStackModule = GridStackModule_1 = __decorate([
        NgModule({
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
        })
    ], GridStackModule);
    return GridStackModule;
}());

export { GridStackModule, GridStackComponent, GridStackItemComponent, GridStackDirective, GridStackPipe, GridStackService, GridStackOptions, GridStackItem };

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('gridstack/dist/gridstack'), require('jquery'), require('lodash')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'gridstack/dist/gridstack', 'jquery', 'lodash'], factory) :
	(factory((global['ng4-gridstackstack'] = {}),global.core,global.common,null,global.jqueryProxy,global._));
}(this, (function (exports,core,common,gridstack,jqueryProxy,_) { 'use strict';

var jqueryProxy__default = jqueryProxy['default'];

var GridStackOptions = (function () {
    function GridStackOptions() {
    }
    return GridStackOptions;
}());

var GridStackItem = (function () {
    function GridStackItem() {
        this.x = 0;
        this.y = 0;
        this.height = 1;
        this.width = 1;
        this.noResize = false;
        this.autoPosition = false;
        this.visible = true;
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    GridStackItem.Clone = function (widget) {
        var /** @type {?} */ result = new GridStackItem();
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

var GridStackItemComponent = (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    function GridStackItemComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.onGridConfigurationChanged = new core.EventEmitter();
        this.contentComponentRef = null;
        this.jGridRef = null;
        this.jWidgetRef = null;
        this.jWidgetRef = el.nativeElement;
    }
    Object.defineProperty(GridStackItemComponent.prototype, "nativeElement", {
        /**
         * @return {?}
         */
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GridStackItemComponent.prototype.ngOnInit = function () {
        this.RenderWidget(null);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridStackItemComponent.prototype.UpdateWidget = function (item) {
    };
    /**
     * @param {?} item
     * @return {?}
     */
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
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    GridStackItemComponent.prototype.update = function (x, y, width, height) {
        // console.log("here");
        if (x === this.option.x && y === this.option.y && width === this.option.width && height === this.option.height)
            return;
        if (this.option != null) {
            this.option.x = x;
            this.option.y = y;
            this.option.width = width;
            this.option.height = height;
            var /** @type {?} */ optionNew = GridStackItem.Clone(this.option);
            this.onGridConfigurationChanged.emit(optionNew);
        }
    };
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    GridStackItemComponent.prototype.ngOnDestroy = function () {
        if (this.contentComponentRef !== null)
            this.contentComponentRef.destroy();
    };
    return GridStackItemComponent;
}());
GridStackItemComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'grid-stack-item',
                template: "<div class=\"grid-stack-item-content\">\n              <div #contentPlaceholder *ngIf=\"contentTemplate\"></div>\n              <ng-content *ngIf=\"!contentTemplate\"></ng-content>\n            </div>"
            },] },
];
/**
 * @nocollapse
 */
GridStackItemComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
GridStackItemComponent.propDecorators = {
    'contentPlaceholder': [{ type: core.ViewChild, args: ["contentPlaceholder", { read: core.ViewContainerRef },] },],
    'contentTemplate': [{ type: core.Input },],
    'option': [{ type: core.Input },],
    'onGridConfigurationChanged': [{ type: core.Output },],
};

var jquery = jqueryProxy__default || jqueryProxy;
var GridStackComponent = (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    function GridStackComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.options = new GridStackOptions();
        this.gridStack = null;
        this.grid = null;
    }
    /**
     * @param {?} item
     * @return {?}
     */
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
    
    /**
     * @param {?} item
     * @return {?}
     */
    GridStackComponent.prototype.updateWidget = function (item) {
        this.grid.resizable(item.nativeElement, true);
        this.grid.move(item.nativeElement, item.option.x, item.option.y);
        this.grid.resize(item.nativeElement, item.option.width, item.option.height);
    };
    /**
     * @param {?} doEnable
     * @param {?} includeNewWidgets
     * @return {?}
     */
    GridStackComponent.prototype.enableMove = function (doEnable, includeNewWidgets) {
        this.grid.enableMove(doEnable, includeNewWidgets);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridStackComponent.prototype.AddWidget = function (item) {
        var /** @type {?} */ widget = this.grid.makeWidget(item.nativeElement);
        item.jGridRef = this.grid;
        //item.jWidgetRef = widget;
        if (item.option != null && item.option.noResize != null && item.option.noResize == true)
            return;
        this.grid.resizable(item.nativeElement, true);
        this.grid.move(item.nativeElement, item.option.x, item.option.y);
        this.grid.resize(item.nativeElement, item.option.width, item.option.height);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridStackComponent.prototype.RemoveWidget = function (item) {
        var /** @type {?} */ widget = this.grid.removeWidget(item.nativeElement, false);
    };
    /**
     * @return {?}
     */
    GridStackComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        var /** @type {?} */ that = this;
        var /** @type {?} */ nativeElement = this.el.nativeElement;
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
            _.each(items, function (item) { return _this.widgetChanged(item); });
        });
        // Initialize widgets
        this.items.forEach(function (item) { return that.makeWidget(item); });
    };
    /**
     * @param {?} change
     * @return {?}
     */
    GridStackComponent.prototype.widgetChanged = function (change) {
        console.log(change);
        //  debugger;
        //console.log(change);
        var /** @type {?} */ jWidget = change.el;
        var /** @type {?} */ gridStackItem = this.items.find(function (item) { return item.jWidgetRef !== null ? item.jWidgetRef === jWidget[0] : false; });
        if (!gridStackItem)
            return;
        gridStackItem.update(change.x, change.y, change.width, change.height);
    };
    return GridStackComponent;
}());
GridStackComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'grid-stack',
                template: "<ng-content></ng-content>",
                styles: [":host { display: block; }"]
            },] },
];
/**
 * @nocollapse
 */
GridStackComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
GridStackComponent.propDecorators = {
    'options': [{ type: core.Input },],
    'items': [{ type: core.ContentChildren, args: [GridStackItemComponent,] },],
};

var GridStackDirective = (function () {
    /**
     * @param {?} el
     */
    function GridStackDirective(el) {
        this.el = el;
    }
    return GridStackDirective;
}());
GridStackDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[gridStackDirective]'
            },] },
];
/**
 * @nocollapse
 */
GridStackDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };

/**
 * Transforms any input value
 */
var GridStackPipe = (function () {
    function GridStackPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    GridStackPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return value;
    };
    return GridStackPipe;
}());
GridStackPipe.decorators = [
    { type: core.Pipe, args: [{
                name: 'gridStackPipe'
            },] },
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
GridStackPipe.ctorParameters = function () { return []; };

var GridStackService = (function () {
    function GridStackService() {
    }
    return GridStackService;
}());
GridStackService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
GridStackService.ctorParameters = function () { return []; };

var GridStackModule = (function () {
    function GridStackModule() {
    }
    /**
     * @return {?}
     */
    GridStackModule.forRoot = function () {
        return {
            ngModule: GridStackModule,
            providers: [GridStackService]
        };
    };
    return GridStackModule;
}());
GridStackModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
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
            },] },
];
/**
 * @nocollapse
 */
GridStackModule.ctorParameters = function () { return []; };

exports.GridStackModule = GridStackModule;
exports.GridStackComponent = GridStackComponent;
exports.GridStackItemComponent = GridStackItemComponent;
exports.GridStackDirective = GridStackDirective;
exports.GridStackPipe = GridStackPipe;
exports.GridStackService = GridStackService;
exports.GridStackOptions = GridStackOptions;
exports.GridStackItem = GridStackItem;

Object.defineProperty(exports, '__esModule', { value: true });

})));

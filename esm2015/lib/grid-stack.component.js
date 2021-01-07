import { Component, Input, ContentChildren, ElementRef, Renderer2 } from '@angular/core';
import { GridStackOptions } from './grid-stack-options.model';
import { GridStackItemComponent } from './grid-stack-item.component';
import * as jqueryProxy from 'jquery';
import * as _ from 'lodash';
import 'gridstack';
const jquery = jqueryProxy.default || jqueryProxy;
export class GridStackComponent {
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
            _.each(items, (item) => this.widgetChanged(item));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1zdGFjay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdGxpL3NvdXJjZS9yZXBvcy9uZzQtZ3JpZHN0YWNrLXRlbXAvcHJvamVjdHMvbmc0LWdyaWRzdGFjay9zcmMvIiwic291cmNlcyI6WyJsaWIvZ3JpZC1zdGFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBMEIsS0FBSyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNuSSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQTtBQUU3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQTtBQUNwRSxPQUFPLEtBQUssV0FBVyxNQUFNLFFBQVEsQ0FBQztBQUN0QyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLFdBQVcsQ0FBQztBQUVuQixNQUFNLE1BQU0sR0FBdUIsV0FBWSxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUE7QUFPdEUsTUFBTSxPQUFPLGtCQUFrQjtJQUszQixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKdEQsWUFBTyxHQUFxQixJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFFcEQsY0FBUyxHQUFXLElBQUksQ0FBQztRQUN6QixTQUFJLEdBQWMsSUFBSSxDQUFDO0lBRy9CLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBNEI7UUFDbkMsd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQiwyQkFBMkI7UUFDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxD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YSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFMUUsQ0FBQzs7O1lBbEdKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLDJCQUEyQjt5QkFDNUIsMkJBQTJCO2FBQ3ZDOzs7WUFkbUUsVUFBVTtZQUFFLFNBQVM7OztzQkFnQnBGLEtBQUs7b0JBQ0wsZUFBZSxTQUFDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIFF1ZXJ5TGlzdCwgSW5wdXQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdyaWRTdGFja09wdGlvbnMgfSBmcm9tICcuL2dyaWQtc3RhY2stb3B0aW9ucy5tb2RlbCdcclxuaW1wb3J0IHsgR3JpZFN0YWNrSXRlbSB9IGZyb20gJy4vZ3JpZC1zdGFjay1pdGVtLm1vZGVsJ1xyXG5pbXBvcnQgeyBHcmlkU3RhY2tJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLXN0YWNrLWl0ZW0uY29tcG9uZW50J1xyXG5pbXBvcnQgKiBhcyBqcXVlcnlQcm94eSBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAnZ3JpZHN0YWNrJztcclxuXHJcbmNvbnN0IGpxdWVyeTogSlF1ZXJ5U3RhdGljID0gKDxhbnk+anF1ZXJ5UHJveHkpLmRlZmF1bHQgfHwganF1ZXJ5UHJveHlcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncmlkLXN0YWNrJyxcclxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbiAgICBzdHlsZXM6IFtcIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRTdGFja0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gICAgQElucHV0KCkgb3B0aW9uczogR3JpZFN0YWNrT3B0aW9ucyA9IG5ldyBHcmlkU3RhY2tPcHRpb25zKCk7XHJcbiAgICBAQ29udGVudENoaWxkcmVuKEdyaWRTdGFja0l0ZW1Db21wb25lbnQpIGl0ZW1zOiBRdWVyeUxpc3Q8R3JpZFN0YWNrSXRlbUNvbXBvbmVudD47XHJcbiAgICBwcml2YXRlIGdyaWRTdGFjazogSlF1ZXJ5ID0gbnVsbDtcclxuICAgIHByaXZhdGUgZ3JpZDogR3JpZFN0YWNrID0gbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtYWtlV2lkZ2V0KGl0ZW06IEdyaWRTdGFja0l0ZW1Db21wb25lbnQpIHtcclxuICAgICAgICAvL2xldCB3aWRnZXQgPSB0aGlzLmdyaWQubWFrZVdpZGdldChpdGVtLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIGl0ZW0uakdyaWRSZWYgPSB0aGlzLmdyaWQ7XHJcbiAgICAgICAgLy9pdGVtLmpXaWRnZXRSZWYgPSB3aWRnZXQ7XHJcbiAgICAgICAgaWYgKGl0ZW0ub3B0aW9uICE9IG51bGwgJiYgaXRlbS5vcHRpb24ubm9SZXNpemUgIT0gbnVsbCAmJiBpdGVtLm9wdGlvbi5ub1Jlc2l6ZSA9PSB0cnVlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5ncmlkLnJlc2l6YWJsZShpdGVtLm5hdGl2ZUVsZW1lbnQsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5tb3ZlKGl0ZW0ubmF0aXZlRWxlbWVudCwgaXRlbS5vcHRpb24ueCwgaXRlbS5vcHRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5ncmlkLnJlc2l6ZShpdGVtLm5hdGl2ZUVsZW1lbnQsIGl0ZW0ub3B0aW9uLndpZHRoLCBpdGVtLm9wdGlvbi5oZWlnaHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVXaWRnZXQoaXRlbTogR3JpZFN0YWNrSXRlbUNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuZ3JpZC5yZXNpemFibGUoaXRlbS5uYXRpdmVFbGVtZW50LCB0cnVlKTtcclxuICAgICAgICB0aGlzLmdyaWQubW92ZShpdGVtLm5hdGl2ZUVsZW1lbnQsIGl0ZW0ub3B0aW9uLngsIGl0ZW0ub3B0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5yZXNpemUoaXRlbS5uYXRpdmVFbGVtZW50LCBpdGVtLm9wdGlvbi53aWR0aCwgaXRlbS5vcHRpb24uaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGVNb3ZlKGRvRW5hYmxlOiBib29sZWFuLCBpbmNsdWRlTmV3V2lkZ2V0czogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZ3JpZC5lbmFibGVNb3ZlKGRvRW5hYmxlLCBpbmNsdWRlTmV3V2lkZ2V0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFkZFdpZGdldChpdGVtOiBHcmlkU3RhY2tJdGVtQ29tcG9uZW50KSB7XHJcbiAgICAgICAgbGV0IHdpZGdldCA9IHRoaXMuZ3JpZC5tYWtlV2lkZ2V0KGl0ZW0ubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgaXRlbS5qR3JpZFJlZiA9IHRoaXMuZ3JpZDtcclxuICAgICAgICAvL2l0ZW0ualdpZGdldFJlZiA9IHdpZGdldDtcclxuICAgICAgICBpZiAoaXRlbS5vcHRpb24gIT0gbnVsbCAmJiBpdGVtLm9wdGlvbi5ub1Jlc2l6ZSAhPSBudWxsICYmIGl0ZW0ub3B0aW9uLm5vUmVzaXplID09IHRydWUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmdyaWQucmVzaXphYmxlKGl0ZW0ubmF0aXZlRWxlbWVudCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5ncmlkLm1vdmUoaXRlbS5uYXRpdmVFbGVtZW50LCBpdGVtLm9wdGlvbi54LCBpdGVtLm9wdGlvbi55KTtcclxuICAgICAgICB0aGlzLmdyaWQucmVzaXplKGl0ZW0ubmF0aXZlRWxlbWVudCwgaXRlbS5vcHRpb24ud2lkdGgsIGl0ZW0ub3B0aW9uLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbW92ZVdpZGdldChpdGVtOiBHcmlkU3RhY2tJdGVtQ29tcG9uZW50KSB7XHJcbiAgICAgICAgbGV0IHdpZGdldCA9IHRoaXMuZ3JpZC5yZW1vdmVXaWRnZXQoaXRlbS5uYXRpdmVFbGVtZW50LCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMgPT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gbmV3IEdyaWRTdGFja09wdGlvbnMoKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNlbGxIZWlnaHQgPT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNlbGxIZWlnaHQgPSA2MDtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLndpZHRoID09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy53aWR0aCA9IDEyO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGVpZ2h0ID09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5oZWlnaHQgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYW5pbWF0ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5mbG9hdCA9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZmxvYXQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlc2l6YWJsZSA9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucmVzaXphYmxlID0gdHJ1ZTtcclxuICAgICAgICBTdHJpbmcodGhpcy5vcHRpb25zLndpZHRoKSA9PSBudWxsID8gdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgXCJkYXRhLWdzLXdpZHRoXCIpIDogdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgXCJkYXRhLWdzLXdpZHRoXCIsIFN0cmluZyh0aGlzLm9wdGlvbnMud2lkdGgpKTtcclxuICAgICAgICBTdHJpbmcodGhpcy5vcHRpb25zLmhlaWdodCkgPT0gbnVsbCA/IHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsIFwiZGF0YS1ncy1oZWlnaHRcIikgOiB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCBcImRhdGEtZ3MtaGVpZ2h0XCIsIFN0cmluZyh0aGlzLm9wdGlvbnMuaGVpZ2h0KSk7XHJcbiAgICAgICAgLy90aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgXCJkYXRhLWdzLXdpZHRoXCIsIFN0cmluZyh0aGlzLm9wdGlvbnMud2lkdGgpKTtcclxuICAgICAgICAvL3RoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCBcImRhdGEtZ3MtaGVpZ2h0XCIsIFN0cmluZyh0aGlzLm9wdGlvbnMuaGVpZ2h0KSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZFN0YWNrID0ganF1ZXJ5KG5hdGl2ZUVsZW1lbnQpLmdyaWRzdGFjayh0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZ3JpZCA9IHRoaXMuZ3JpZFN0YWNrLmRhdGEoXCJncmlkc3RhY2tcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZFN0YWNrLm9uKFwiY2hhbmdlXCIsIChlOiBhbnksIGl0ZW1zOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgXy5lYWNoKGl0ZW1zLCAoaXRlbTogYW55KSA9PiB0aGlzLndpZGdldENoYW5nZWQoaXRlbSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIHdpZGdldHNcclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB0aGF0Lm1ha2VXaWRnZXQoaXRlbSkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdpZGdldENoYW5nZWQoY2hhbmdlOiBHcmlkU3RhY2tJdGVtKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2hhbmdlKTtcclxuICAgICAgICAvLyAgZGVidWdnZXI7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjaGFuZ2UpO1xyXG4gICAgICAgIHZhciBqV2lkZ2V0ID0gY2hhbmdlLmVsO1xyXG4gICAgICAgIHZhciBncmlkU3RhY2tJdGVtID0gdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5qV2lkZ2V0UmVmICE9PSBudWxsID8gaXRlbS5qV2lkZ2V0UmVmID09PSBqV2lkZ2V0WzBdIDogZmFsc2UpO1xyXG4gICAgICAgIGlmICghZ3JpZFN0YWNrSXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgZ3JpZFN0YWNrSXRlbS51cGRhdGUoY2hhbmdlLngsIGNoYW5nZS55LCBjaGFuZ2Uud2lkdGgsIGNoYW5nZS5oZWlnaHQpO1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
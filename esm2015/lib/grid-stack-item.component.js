import { Component, Input, Output, ElementRef, ViewChild, Renderer2, EventEmitter, ViewContainerRef } from '@angular/core';
import { GridStackItem } from './grid-stack-item.model';
export class GridStackItemComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1zdGFjay1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy90bGkvc291cmNlL3JlcG9zL25nNC1ncmlkc3RhY2stdGVtcC9wcm9qZWN0cy9uZzQtZ3JpZHN0YWNrL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9ncmlkLXN0YWNrLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWUsS0FBSyxFQUFFLE1BQU0sRUFBd0IsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUE0QixnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4TCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFXdkQsTUFBTSxPQUFPLHNCQUFzQjtJQVUvQixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFOckQsK0JBQTBCLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFFekUsd0JBQW1CLEdBQXNCLElBQUksQ0FBQztRQUM5QyxhQUFRLEdBQVEsSUFBSSxDQUFDO1FBQ2QsZUFBVSxHQUFRLElBQUksQ0FBQztRQUcxQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUNELElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDakMsQ0FBQztJQUNELFFBQVE7UUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBbUI7SUFFaEMsQ0FBQztJQUNELFlBQVksQ0FBQyxJQUFtQjtRQUM1QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzdCLElBQUksSUFBSSxJQUFJLElBQUk7WUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV2QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEwsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BMLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwTSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUks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LENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ25EO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDWCwrQkFBK0I7UUFDL0Isd0RBQXdEO1FBQ3hELG9EQUFvRDtRQUNwRCx3Q0FBd0M7UUFDeEMsUUFBUTtRQUNSLDRCQUE0QjtRQUM1QiwwRkFBMEY7UUFDMUYsWUFBWTtRQUNaLEdBQUc7SUFDUCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLG1CQUFtQixLQUFLLElBQUk7WUFDakMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNDLENBQUM7OztZQS9GSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7bUJBR0s7YUFDbEI7OztZQVhxRSxVQUFVO1lBQWEsU0FBUzs7O2lDQWFqRyxTQUFTLFNBQUMsb0JBQW9CLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7OEJBQzFELEtBQUs7cUJBQ0wsS0FBSzt5Q0FDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgUmVuZGVyZXIyLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHcmlkU3RhY2tJdGVtIH0gZnJvbSAnLi9ncmlkLXN0YWNrLWl0ZW0ubW9kZWwnXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBfOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JpZC1zdGFjay1pdGVtJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImdyaWQtc3RhY2staXRlbS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiAjY29udGVudFBsYWNlaG9sZGVyICpuZ0lmPVwiY29udGVudFRlbXBsYXRlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhY29udGVudFRlbXBsYXRlXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkU3RhY2tJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gICAgQFZpZXdDaGlsZChcImNvbnRlbnRQbGFjZWhvbGRlclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgY29udGVudFBsYWNlaG9sZGVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gICAgQElucHV0KCkgY29udGVudFRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBvcHRpb246IEdyaWRTdGFja0l0ZW07XHJcbiAgICBAT3V0cHV0KCkgb25HcmlkQ29uZmlndXJhdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRTdGFja0l0ZW0+KCk7XHJcblxyXG4gICAgY29udGVudENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4gPSBudWxsO1xyXG4gICAgakdyaWRSZWY6IGFueSA9IG51bGw7XHJcbiAgICBwdWJsaWMgaldpZGdldFJlZjogYW55ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgICAgICB0aGlzLmpXaWRnZXRSZWYgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hdGl2ZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLlJlbmRlcldpZGdldChudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGVXaWRnZXQoaXRlbTogR3JpZFN0YWNrSXRlbSkge1xyXG5cclxuICAgIH1cclxuICAgIFJlbmRlcldpZGdldChpdGVtOiBHcmlkU3RhY2tJdGVtKSB7XHJcbiAgICAgICAgbGV0IHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcjtcclxuICAgICAgICBpZiAoaXRlbSAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbiA9IGl0ZW07XHJcblxyXG4gICAgICAgIFN0cmluZyh0aGlzLm9wdGlvbi54KSA9PSBudWxsID8gdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYXRpdmVFbGVtZW50LCBcImRhdGEtZ3MteFwiKSA6IHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMubmF0aXZlRWxlbWVudCwgXCJkYXRhLWdzLXhcIiwgU3RyaW5nKHRoaXMub3B0aW9uLngpKTtcclxuICAgICAgICBTdHJpbmcodGhpcy5vcHRpb24ueSkgPT0gbnVsbCA/IHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMubmF0aXZlRWxlbWVudCwgXCJkYXRhLWdzLXlcIikgOiB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLm5hdGl2ZUVsZW1lbnQsIFwiZGF0YS1ncy15XCIsIFN0cmluZyh0aGlzLm9wdGlvbi55KSk7XHJcbiAgICAgICAgU3RyaW5nKHRoaXMub3B0aW9uLndpZHRoKSA9PSBudWxsID8gdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYXRpdmVFbGVtZW50LCBcImRhdGEtZ3Mtd2lkdGhcIikgOiB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLm5hdGl2ZUVsZW1lbnQsIFwiZGF0YS1ncy13aWR0aFwiLCBTdHJpbmcodGhpcy5vcHRpb24ud2lkdGgpKTtcclxuICAgICAgICBTdHJpbmcodGhpcy5vcHRpb24uaGVpZ2h0KSA9PSBudWxsID8gdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYXRpdmVFbGVtZW50LCBcImRhdGEtZ3MtaGVpZ2h0XCIpIDogdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5uYXRpdmVFbGVtZW50LCBcImRhdGEtZ3MtaGVpZ2h0XCIsIFN0cmluZyh0aGlzLm9wdGlvbi5oZWlnaHQpKTtcclxuICAgICAgICAvL3RoaXMucmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLm5hdGl2ZUVsZW1lbnQsIFwiZGF0YS1ncy14XCIsIFN0cmluZyh0aGlzLm9wdGlvbi54KSk7XHJcbiAgICAgICAgLy90aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUodGhpcy5uYXRpdmVFbGVtZW50LCBcImRhdGEtZ3MteVwiLCBTdHJpbmcodGhpcy5vcHRpb24ueSkpO1xyXG4gICAgICAgIC8vdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMubmF0aXZlRWxlbWVudCwgXCJkYXRhLWdzLXdpZHRoXCIsIFN0cmluZyh0aGlzLm9wdGlvbi53aWR0aCkpO1xyXG4gICAgICAgIC8vdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMubmF0aXZlRWxlbWVudCwgXCJkYXRhLWdzLWhlaWdodFwiLCBTdHJpbmcodGhpcy5vcHRpb24uaGVpZ2h0KSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5taW5XaWR0aCkge1xyXG4gICAgICAgICAgICBTdHJpbmcodGhpcy5vcHRpb24ubWluV2lkdGgpID09IG51bGwgPyB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hdGl2ZUVsZW1lbnQsIFwiZGF0YS1ncy1taW4td2lkdGhcIikgOiB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLm5hdGl2ZUVsZW1lbnQsIFwiZGF0YS1ncy1taW4td2lkdGhcIiwgU3RyaW5nKHRoaXMub3B0aW9uLm1pbldpZHRoKSk7XHJcbiAgICAgICAgICAgIC8vcmVuZGVyZXIuc2V0RWxlbWVudEF0dHJpYnV0ZSh0aGlzLm5hdGl2ZUVsZW1lbnQsIFwiZGF0YS1ncy1taW4td2lkdGhcIiwgU3RyaW5nKHRoaXMub3B0aW9uLm1pbldpZHRoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5ub1Jlc2l6ZSAhPSBudWxsICYmIHRoaXMub3B0aW9uLm5vUmVzaXplID09IHRydWUpIHtcclxuICAgICAgICAgICAgXCJ5ZXNcIiA9PSBudWxsID8gdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYXRpdmVFbGVtZW50LCBcImRhdGEtZ3Mtbm8tcmVzaXplXCIpIDogdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5uYXRpdmVFbGVtZW50LCBcImRhdGEtZ3Mtbm8tcmVzaXplXCIsIFwieWVzXCIpO1xyXG4gICAgICAgICAgICAvL3JlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUodGhpcy5uYXRpdmVFbGVtZW50LCBcImRhdGEtZ3Mtbm8tcmVzaXplXCIsIFwieWVzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uLnZpc2libGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5uYXRpdmVFbGVtZW50LCBcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgLy90aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLm5hdGl2ZUVsZW1lbnQsIFwiaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uLml0ZW1JZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uLml0ZW1JZCA9PSBudWxsID8gdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYXRpdmVFbGVtZW50LCBcImRhdGEtaXRlbS1pZFwiKSA6IHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMubmF0aXZlRWxlbWVudCwgXCJkYXRhLWl0ZW0taWRcIiwgdGhpcy5vcHRpb24uaXRlbUlkKTtcclxuICAgICAgICAgICAgLy90aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUodGhpcy5uYXRpdmVFbGVtZW50LCBcImRhdGEtaXRlbS1pZFwiLCB0aGlzLm9wdGlvbi5pdGVtSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJoZXJlXCIpO1xyXG4gICAgICAgIGlmICh4ID09PSB0aGlzLm9wdGlvbi54ICYmIHkgPT09IHRoaXMub3B0aW9uLnkgJiYgd2lkdGggPT09IHRoaXMub3B0aW9uLndpZHRoICYmIGhlaWdodCA9PT0gdGhpcy5vcHRpb24uaGVpZ2h0KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb24ueCA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uLnkgPSB5O1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbi53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbi5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0aW9uTmV3ID0gR3JpZFN0YWNrSXRlbS5DbG9uZSh0aGlzLm9wdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMub25HcmlkQ29uZmlndXJhdGlvbkNoYW5nZWQuZW1pdChvcHRpb25OZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy9pZiAoISF0aGlzLmNvbnRlbnRUZW1wbGF0ZSkge1xyXG4gICAgICAgIC8vICAgIHRoaXMuY29tcG9uZW50U2VydmljZS5nZXREeW5hbWljQ29tcG9uZW50RmFjdG9yeSh7XHJcbiAgICAgICAgLy8gICAgICAgIHNlbGVjdG9yOiBgZ3JpZC1zdGFjay1pdGVtLSR7RGF0ZS5ub3coKX1gLFxyXG4gICAgICAgIC8vICAgICAgICB0ZW1wbGF0ZTogdGhpcy5jb250ZW50VGVtcGxhdGVcclxuICAgICAgICAvLyAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAudGhlbihmYWN0b3J5ID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgIHRoaXMuY29udGVudENvbXBvbmVudFJlZiA9IHRoaXMuY29udGVudFBsYWNlaG9sZGVyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcclxuICAgICAgICAvLyAgICAgICAgfSlcclxuICAgICAgICAvL31cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jb250ZW50Q29tcG9uZW50UmVmICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
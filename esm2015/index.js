import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridStackComponent } from './lib/grid-stack.component';
import { GridStackItemComponent } from './lib/grid-stack-item.component';
import { GridStackDirective } from './lib/grid-stack.directive';
import { GridStackPipe } from './lib/grid-stack.pipe';
export class GridStackModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdGxpL3NvdXJjZS9yZXBvcy9uZzQtZ3JpZHN0YWNrLXRlbXAvcHJvamVjdHMvbmc0LWdyaWRzdGFjay9zcmMvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBc0J0RCxNQUFNLE9BQU8sZUFBZTs7O1lBakIzQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLGtCQUFrQjtvQkFDbEIsc0JBQXNCO29CQUN0QixrQkFBa0I7b0JBQ2xCLGFBQWE7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsc0JBQXNCO29CQUN0QixrQkFBa0I7b0JBQ2xCLGFBQWE7aUJBQ2Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEdyaWRTdGFja0NvbXBvbmVudCB9IGZyb20gJy4vbGliL2dyaWQtc3RhY2suY29tcG9uZW50JztcclxuaW1wb3J0IHsgR3JpZFN0YWNrSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGliL2dyaWQtc3RhY2staXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHcmlkU3RhY2tEaXJlY3RpdmUgfSBmcm9tICcuL2xpYi9ncmlkLXN0YWNrLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEdyaWRTdGFja1BpcGUgfSBmcm9tICcuL2xpYi9ncmlkLXN0YWNrLnBpcGUnO1xyXG5cclxuaW1wb3J0IHsgR3JpZFN0YWNrT3B0aW9ucyB9IGZyb20gJy4vbGliL2dyaWQtc3RhY2stb3B0aW9ucy5tb2RlbCc7XHJcbmltcG9ydCB7IEdyaWRTdGFja0l0ZW0gfSBmcm9tICcuL2xpYi9ncmlkLXN0YWNrLWl0ZW0ubW9kZWwnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgR3JpZFN0YWNrQ29tcG9uZW50LFxyXG4gICAgR3JpZFN0YWNrSXRlbUNvbXBvbmVudCxcclxuICAgIEdyaWRTdGFja0RpcmVjdGl2ZSxcclxuICAgIEdyaWRTdGFja1BpcGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEdyaWRTdGFja0NvbXBvbmVudCxcclxuICAgIEdyaWRTdGFja0l0ZW1Db21wb25lbnQsXHJcbiAgICBHcmlkU3RhY2tEaXJlY3RpdmUsXHJcbiAgICBHcmlkU3RhY2tQaXBlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZFN0YWNrTW9kdWxlIHtcclxufVxyXG4iXX0=
import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appalertdire]"
})
export class AlertDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

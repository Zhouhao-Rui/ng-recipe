import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
  ViewChild
} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  renderer: Renderer2;
  element: ElementRef;
  constructor(renderer: Renderer2, elementRef: ElementRef) {
    this.renderer = renderer;
    this.element = elementRef;
  }

  @HostListener("click") hostClick() {
    let aEle = this.element.nativeElement.querySelector(".dropdown-toggle");

    this.renderer.addClass(aEle, "show");
    this.renderer.setAttribute(aEle, "aria-expanded", "true");
    let ulEle = this.element.nativeElement.querySelector(".dropdown-menu");
    this.renderer.addClass(ulEle, "show");
  }
}

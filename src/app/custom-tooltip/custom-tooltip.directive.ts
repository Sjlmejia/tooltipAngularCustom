/**
 *
 * Copyright (C) 2021 Hewlett Packard Enterprise Development LP
 *
 */

import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Injector,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {CustomTooltipComponent} from "./custom-tooltip.component";

@Directive({
  selector: '[customTooltip]'
})

export class CustomTooltipDirective {

  @Input() customTooltip:  TemplateRef<any>;

  private componentRef : ComponentRef<CustomTooltipComponent>;
  viewRef;

  constructor(private element : ElementRef,
               private injector: Injector,
               private resolver : ComponentFactoryResolver,
               private vcr : ViewContainerRef,
               private appRef: ApplicationRef
               ) {
  }


  @HostListener('mouseenter')
  mouseenter() {
    if ( this.componentRef ) return;
    const factory = this.resolver.resolveComponentFactory(CustomTooltipComponent);
    this.componentRef = this.vcr.createComponent(factory, 0, this.injector, this.generateNgContent());
    const domElem = (this.viewRef as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.setTooltipComponentProperties();
  }

  private setTooltipComponentProperties() {
    if (this.componentRef !== null) {
      this.componentRef.instance.customTooltip = this.customTooltip;
      const {left, right, bottom} = this.element.nativeElement.getBoundingClientRect();
      this.componentRef.instance.left = (right - left) / 2 + left;
      this.componentRef.instance.top = bottom;
      this.componentRef.instance.width = (this.viewRef as EmbeddedViewRef<any>).rootNodes[0].clientWidth;
    }
  }

  generateNgContent() {
    const context = {};
    this.viewRef = this.customTooltip.createEmbeddedView(context);
    return [ this.viewRef.rootNodes ];
  }

  @HostListener('mouseout')
  mouseout() {
    this.destroy();
  }

  destroy() {
    if(this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  ngOnDestroy() {
    this.destroy();
  }
}

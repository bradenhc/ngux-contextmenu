import { Injectable, ElementRef, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {
  private scopeElements: Map<string, ElementRef> = new Map();

  public renderer: Renderer2;

  constructor() {}

  register(scope: string, element: ElementRef): void {
    this.scopeElements.set(scope, element);
    this.renderer.listen(element.nativeElement, 'click', e => {
      this.close(scope, e);
    });
  }

  open(scope: string, event: MouseEvent): void {
    if (this.scopeElements.has(scope)) {
      let ref = this.scopeElements.get(scope).nativeElement;
      this.renderer.setStyle(ref, 'top', event.y + 'px');
      this.renderer.setStyle(ref, 'left', event.x + 'px');
      this.renderer.setStyle(ref, 'display', 'flex');
      event.stopPropagation();
      event.preventDefault();
    }
  }

  close(scope: string, event: MouseEvent): void {
    if (this.scopeElements.has(scope)) {
      let ref = this.scopeElements.get(scope).nativeElement;
      this.renderer.setStyle(ref, 'display', 'none');
      this.renderer.setStyle(ref, 'top', 0 + 'px');
      this.renderer.setStyle(ref, 'left', 0 + 'px');
      event.stopPropagation();
      event.preventDefault();
    }
  }
}

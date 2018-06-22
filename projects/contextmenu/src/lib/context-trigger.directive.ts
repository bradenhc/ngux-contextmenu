import { Directive, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[nguxContextTrigger]'
})
export class ContextmenuTriggerDirective {
  constructor(public renderer: Renderer2) {}

  @HostListener('contextmenu', ['$event'])
  public onContextMenu($event): void {
    let cm: HTMLElement = this.renderer.selectRootElement('ngux-contextmenu');
    this.renderer.setStyle(cm, 'top', $event.y + 10 + 'px');
    this.renderer.setStyle(cm, 'left', $event.x + 10 + 'px');
    $event.preventDefault();
    $event.stopPropagation();
  }
}

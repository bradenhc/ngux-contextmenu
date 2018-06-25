import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { ContextMenuService } from './contextmenu.service';

/**
 * Attaches a listener on the host element that will detect a `contextmenu` event and open
 * the `ngux-contextmenu` element associated with the scope of the trigger.
 */
@Directive({
  selector: '[nguxContextMenuTrigger]'
})
export class ContextMenuTriggerDirective {

  /** The scope this trigger will fire on */
  @Input('nguxScope') public scope: string = '';

  constructor(
    private cmService: ContextMenuService,
    private rend: Renderer2
  ) {
    this.cmService.renderer = this.rend;
  }

  /**
   * Uses the `@HostListener` annotation to add a `contextmenu` event listener to the host
   * element. The listener will use the {@link ContextMenuService } to open the context menu
   * with a scope that matches that of the directive element.
   * 
   * @param $event the native mouse event detected on a right click
   */
  @HostListener('contextmenu', ['$event'])
  public onContextMenu($event): void {
    this.cmService.open(this.scope, $event);
  }
}

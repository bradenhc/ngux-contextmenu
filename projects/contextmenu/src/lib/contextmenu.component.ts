import { Component, OnInit, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { ContextMenuService } from './contextmenu.service';

/**
 * Main component for rendering and displaying the context menu. By default, the context menu
 * will be hidden from the DOM. When a trigger that has a scope matching that of the one assocaited
 * with this context menu detects a `contextmenu` event, then this context menu will be displayed.
 */
@Component({
  selector: 'ngux-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.css']
})
export class ContextMenuComponent implements OnInit {
  /** The scope this element will respond to */
  @Input('scope') public scope: string = '';

  constructor(
    private ref: ElementRef,
    private cmService: ContextMenuService,
    private rend: Renderer2
  ) {
    this.cmService.renderer = this.rend;
  }

  /**
   * Angular lifecycle hook that fires when the element has been rendered and is waiting to be
   * initialized. This function will register the context menu with the {@link ContextMenuService }
   * using the component's detected `nguxScope` value so that it can be opened and closed through
   * right-click actions.
   */
  public ngOnInit() {
    this.cmService.register(this.scope, this.ref);
  }

  /**
   * Attaches a listener to the web document in order to detect a click that occurs outside of the
   * context menu. When a click outside the context menu is detected, the context menu will be
   * closed.
   * 
   * @param $event the native `MouseEvent`
   */
  @HostListener('document:click', ['$event'])
  public close($event: MouseEvent): void {
    this.cmService.close(this.scope, $event);
  }
}

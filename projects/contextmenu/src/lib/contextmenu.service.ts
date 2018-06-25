import { Injectable, ElementRef, Renderer2 } from '@angular/core';

/**
 * Service for registering a scoped context menu. This allows us to have multiple context menus
 * on the same page within the same component without getting collisions. It also allows the
 * {@link ContextMenuTriggerDirective } to open the context menu when an element initialized by
 * the directive detects a right-click event.
 * 
 * This service uses `Renderer2` to provide secure interactions with native DOM elements. This helps
 * reduce the risk of XSS and other security vulnerabilties when working directly with the DOM.
 */
@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {
  /** A map of element references keyed by scopes */
  private scopeElements: Map<string, ElementRef> = new Map();

  /** The renderer the service uses to securely modify native DOM elements */
  public renderer: Renderer2;

  constructor() {}

  /**
   * Associates the scope with the provided element reference and initializes the native DOM element
   * with a listener to close the context menu whenever a click occurs inside the context menu
   * element.
   * 
   * @param scope the scope name for the context menu
   * @param element a reference to the `ngux-contextmenu` element
   */
  public register(scope: string, element: ElementRef): void {
    this.scopeElements.set(scope, element);
    this.renderer.listen(element.nativeElement, 'click', e => {
      this.close(scope, e);
    });
  }

  /**
   * Opens the context menu associated with the provided scope. This will also stop the propogation
   * of the event and prevent the default browser context menu from opening.
   * 
   * If no context menu with the scope has been registered, then nothing will happen.
   * 
   * @param scope the scope name of the context menu to open
   * @param event the original `MouseEvent` that was detected
   */
  public open(scope: string, event: MouseEvent): void {
    if (this.scopeElements.has(scope)) {
      let ref = this.scopeElements.get(scope).nativeElement;
      this.renderer.setStyle(ref, 'top', event.y + 'px');
      this.renderer.setStyle(ref, 'left', event.x + 'px');
      this.renderer.setStyle(ref, 'display', 'flex');
      event.stopPropagation();
      event.preventDefault();
    }
  }

  /**
   * Closes the context menu associated with the provided scope. This will also stop the propogation
   * of the event and prevent any other defaults from occuring.
   * 
   * If no context menu with the provided scope has been registered, then nothing will happen.
   * 
   * @param scope the scope name of the context menu to close
   * @param event the original `MouseEvent` that was detected
   */
  public close(scope: string, event: MouseEvent): void {
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

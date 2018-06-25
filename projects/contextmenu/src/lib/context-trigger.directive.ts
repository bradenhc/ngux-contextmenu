import { Directive, HostListener, OnInit, Input, Renderer2 } from '@angular/core';
import { ContextMenuService } from './contextmenu.service';

@Directive({
  selector: '[nguxContextMenuTrigger]'
})
export class ContextMenuTriggerDirective implements OnInit {
  @Input('scope') public scope: string = '';

  constructor(
    private cmService: ContextMenuService,
    private rend: Renderer2
  ) {
    this.cmService.renderer = rend;
  }

  ngOnInit() {
  }

  @HostListener('contextmenu', ['$event'])
  public onContextMenu($event): void {
    this.cmService.open(this.scope, $event);
  }
}

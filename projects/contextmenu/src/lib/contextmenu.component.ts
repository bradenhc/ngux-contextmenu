import { Component, OnInit, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { ContextMenuService } from './contextmenu.service';

@Component({
  selector: 'ngux-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.css']
})
export class ContextMenuComponent implements OnInit {
  constructor(
    private ref: ElementRef,
    private cmService: ContextMenuService,
    private rend: Renderer2
  ) {
      this.cmService.renderer = rend;
  }

  @Input('scope') public scope: string = '';

  ngOnInit() {
    this.cmService.register(this.scope, this.ref);
  }

  @HostListener('document:click', ['$event'])
  close($event: MouseEvent) {
    this.cmService.close(this.scope, $event);
  }
}

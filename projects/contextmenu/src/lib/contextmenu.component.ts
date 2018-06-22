import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'ngux-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.css']
})
export class ContextmenuComponent implements OnInit {

  @Input('theme')
  public theme: string = '';

  @Input('hover')
  public hoverTheme: string = '';

  constructor(private renderer: Renderer2, private ref: ElementRef) {}

  ngOnInit() {
    this.renderer.listen(this.ref.nativeElement, 'click', e => {
      this.close(e);
    });
  }

  @HostListener('document:click', ['$event'])
  close($event: MouseEvent) {
    $event.stopPropagation()
    $event.preventDefault();
  }
}

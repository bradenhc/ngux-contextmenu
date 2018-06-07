import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'ngux-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.css']
})
export class ContextmenuComponent implements OnInit {
  @Input() trigger: Window;
  @Input() backgroundColor: string = 'black';
  @Input() fontColor: string = 'white';
  @Input() hoverColor: string = 'blue';
  @Input() hoverFontColor: string = 'white';
  @Input() shadow: boolean = false;

  @ViewChild('contextMenuItems') menuItems: ElementRef;

  private visible: boolean = false;

  private display: string = 'none';

  constructor(private ref: ElementRef) {}

  ngOnInit() {
    this.ref.nativeElement.style.backgroundColor = this.backgroundColor;
    this.ref.nativeElement.style.color = this.fontColor;
    console.log(this.ref);
    this.ref.nativeElement.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();
    });
    this.trigger.addEventListener('contextmenu', e => {
      this.ref.nativeElement.style.top = e.y + 10 + 'px';
      this.ref.nativeElement.style.left = e.x + 10 + 'px';
      this.open();
      e.preventDefault();
      e.stopPropagation();
    });
  }

  private open(): void {
    this.display = 'flex';
  }

  @HostListener('document:click', ['$event'])
  close($event) {
    this.display = 'none'
  }
}

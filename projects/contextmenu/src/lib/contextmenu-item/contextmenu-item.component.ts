import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'ngux-contextmenu-item',
  templateUrl: './contextmenu-item.component.html',
  styleUrls: ['./contextmenu-item.component.css']
})
export class ContextmenuItemComponent implements OnInit {

  @Input() name: string;

  @Output('rightclick') rightClickEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  private stopEvent(e: Event){
    e.preventDefault();
    e.stopPropagation();
  }

}

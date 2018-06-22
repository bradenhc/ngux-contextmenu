import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ContextmenuService } from '../contextmenu.service';

@Component({
  selector: 'ngux-contextmenu-item',
  templateUrl: './contextmenu-item.component.html',
  styleUrls: ['./contextmenu-item.component.css']
})
export class ContextmenuItemComponent implements OnInit {

  @Input('text') 
  public text: string;

  @Input('icon')
  public icon: string;

  constructor(private cmService: ContextmenuService) { }

  ngOnInit() {
  }

  @HostListener('contextmenu', ['$event'])
  public stopEvent($event: Event){
    $event.preventDefault();
    $event.stopPropagation();
  }

}

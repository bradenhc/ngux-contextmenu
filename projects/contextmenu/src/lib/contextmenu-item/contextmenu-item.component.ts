import { Component, Input, HostListener } from '@angular/core';
import { ContextMenuService } from '../contextmenu.service';

@Component({
  selector: 'ngux-contextmenu-item',
  templateUrl: './contextmenu-item.component.html',
  styleUrls: ['./contextmenu-item.component.css']
})
export class ContextMenuItemComponent {

  @Input('text') 
  public text: string = 'Item';

  @Input('icon')
  public icon: any = '';

  @Input('alias')
  public alias: string = '';

  constructor(private cmService: ContextMenuService) { }

  @HostListener('contextmenu', ['$event'])
  public stopEvent($event: Event){
    $event.preventDefault();
    $event.stopPropagation();
  }

}

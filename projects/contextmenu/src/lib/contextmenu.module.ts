import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextmenuComponent } from './contextmenu.component';
import { ContextmenuItemComponent } from './contextmenu-item/contextmenu-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContextmenuComponent, ContextmenuItemComponent],
  exports: [ContextmenuComponent, ContextmenuItemComponent]
})
export class ContextmenuModule { }

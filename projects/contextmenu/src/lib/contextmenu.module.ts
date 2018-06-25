import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuComponent } from './contextmenu.component';
import { ContextMenuItemComponent } from './contextmenu-item/contextmenu-item.component';
import { ContextMenuService } from './contextmenu.service';
import { ContextMenuTriggerDirective } from './context-trigger.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [ContextMenuComponent, ContextMenuItemComponent, ContextMenuTriggerDirective],
  exports: [ContextMenuComponent, ContextMenuItemComponent, ContextMenuTriggerDirective],
  providers: [ContextMenuService]
})
export class ContextMenuModule {}

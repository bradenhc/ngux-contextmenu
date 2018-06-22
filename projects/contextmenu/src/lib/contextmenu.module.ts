import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextmenuComponent } from './contextmenu.component';
import { ContextmenuItemComponent } from './contextmenu-item/contextmenu-item.component';
import { ContextmenuService, ContextmenuEvent } from './contextmenu.service';
import { ContextmenuTriggerDirective } from './context-trigger.directive';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [CommonModule, AngularFontAwesomeModule],
  declarations: [ContextmenuComponent, ContextmenuItemComponent, ContextmenuTriggerDirective],
  exports: [ContextmenuComponent, ContextmenuItemComponent, ContextmenuTriggerDirective],
  providers: [ContextmenuService]
})
export class ContextmenuModule {}

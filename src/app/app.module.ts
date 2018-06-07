import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContextmenuModule } from 'projects/contextmenu/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContextmenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

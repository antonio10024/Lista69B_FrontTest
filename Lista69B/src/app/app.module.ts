import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './share/Menu/menu.component';
import { TestComponent } from './test/test.component';
import { CardComponent } from './share/Cards/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

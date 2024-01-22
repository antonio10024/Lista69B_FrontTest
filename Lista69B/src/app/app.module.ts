import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './share/Menu/menu.component';
import { TestComponent } from './test/test.component';
import { CardComponent } from './share/Cards/card.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpRequestInterceptor } from './share/http-request.interceptor';
import { TableModule } from './share/table/table.module';
import { SearchFilterPipePipe } from './share/pipe/search-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TestComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

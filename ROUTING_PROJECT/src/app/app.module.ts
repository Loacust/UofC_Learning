import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Cmp1Component } from './components/cmp1/cmp1.component';
import { Cmp3Component } from './components/cmp3/cmp3.component';
import { Cmp2Component } from './components/cmp2/cmp2.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Cmp1Component,
    Cmp3Component,
    Cmp2Component,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

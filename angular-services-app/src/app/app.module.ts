import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Clicker1Component } from './clicker1/clicker1.component';
import { Clicker2Component } from './clicker2/clicker2.component';
import { ClickService } from './services/click.service';

@NgModule({
  declarations: [
    AppComponent,
    Clicker1Component,
    Clicker2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClickService],
  bootstrap: [AppComponent]
})
export class AppModule { }

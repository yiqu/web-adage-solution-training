import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { Lab1Component } from './Lab1/lab1.component';
import { Lab2Component } from './Lab2/lab2.component'
import { Lab3Component } from './Lab3/lab3.component';
import { FancyTextComponent } from './Lab3/fancy-text.component'
import { NotFancyCheckBoxComponent } from './Lab3/not-fancy-checkbox.component';

import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    Lab1Component,
    Lab2Component,
    Lab3Component,
    FancyTextComponent,
    NotFancyCheckBoxComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [
    //service
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

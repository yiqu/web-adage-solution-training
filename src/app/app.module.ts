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
import { Lab5Component } from './Lab5/data-binding.component';
import { Lab6Component } from './Lab6/lab6.component';
import { Lab6ChildComponent } from './Lab6/lab6.component';
import { Lab7Component } from './Lab7/lab7.component';
import { Lab8Component } from './Lab8/lab8.component';
import { ReactiveForm } from './Lab11/reactive-form.component';

import { service } from './shared/service';
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
    Lab5Component,
    Lab6Component,
    Lab6ChildComponent,
    Lab7Component,
    Lab8Component,
    ReactiveForm,
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
    service
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

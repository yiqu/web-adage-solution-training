import { Routes } from '@angular/router';

import { Lab1Component } from './Lab1/lab1.component';
import { Lab2Component } from './Lab2/lab2.component';
import { Lab3Component } from './Lab3/lab3.component';
import { Lab5Component } from './Lab5/data-binding.component';
import { Lab6Component } from './Lab6/lab6.component';
import { Lab7Component } from './Lab7/lab7.component';
import { Lab8Component } from './Lab8/lab8.component';
import { HomeComponent } from './home/home.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent  },
  { path: '1', component: Lab1Component },
  { path: '2', component: Lab2Component },
  { path: '3', component: Lab3Component },
  { path: '4', component: Lab3Component },
  { path: '5', component: Lab5Component },
  { path: '6', component: Lab6Component },
  { path: '7', component: Lab7Component },
  { path: '8', component: Lab8Component },

];


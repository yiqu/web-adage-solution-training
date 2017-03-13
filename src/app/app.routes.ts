import { Routes } from '@angular/router';

import { Lab1Component } from './Lab1/lab1.component';
import { Lab2Component } from './Lab2/lab2.component';
import { HomeComponent } from './home/home.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent  },
  { path: '1', component: Lab1Component },
  { path: '2', component: Lab2Component },
  //{ path: '4', component: AboutComponent },
  //{ path: '5', component: AboutComponent },
  //{ path: '6', component: AboutComponent },
  //{ path: '7', component: AboutComponent },
  //{ path: '8', component: AboutComponent },
];


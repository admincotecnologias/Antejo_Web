import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootModule } from './Root/root.module'
import { RouterModule, Routes } from "@angular/router";

//import {LoginComponent} from './ClientDashboard/Login/login.component';
import { HomeComponent } from './Root/Home/home.component';

var derp = true;
const routes: any = [
  { path: '', canActivate: derp, loadChildren: 'app/Root/root.module#RootModule' }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

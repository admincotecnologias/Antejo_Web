/**
 * Created by practicante on 30/08/17.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";

//import {LoginComponent} from './ClientDashboard/Login/login.component';
import {HomeComponent} from './Home/home.component';




const rootRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: HomeComponent },
];

export const rootRouting = RouterModule.forChild(rootRoutes);
@NgModule({
    declarations: [
        HomeComponent//,
        //LoginComponent
    ],
    imports: [
        rootRouting
    ]
})
export class RootModule { }
//providers: [],
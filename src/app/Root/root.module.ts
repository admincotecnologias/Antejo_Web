import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { VisionComponent } from './Sections/vision/vision.component';
import { Component } from '@angular/core';
/**
 * Created by practicante on 30/08/17.
 */
import { MisionComponent } from './Sections/mision/mision.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './Home/home.component';




const rootRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'mision', component: MisionComponent},
    { path: 'vision', component: VisionComponent}

];

export const rootRouting = RouterModule.forChild(rootRoutes);
@NgModule({
    declarations: [
        HomeComponent,
        MisionComponent,
        VisionComponent,
    ],
    imports: [
        rootRouting,
        ScrollToModule.forRoot(),
    ]
})
export class RootModule { }

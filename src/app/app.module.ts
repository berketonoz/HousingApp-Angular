import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations: [],
    providers: [],
    bootstrap: [],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeComponent,
        RouterModule,
    ]
})
export class AppModule { }

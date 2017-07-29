import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from "app/app-routing.module";
import { DynamicFormModule } from "app/dynamic-form/dynamic-form.module";
import { AppReactiveFormModule } from "app/reactive-form/reactive-form.module";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppTemplateComponent } from "app/app-template/app-template.component";


@NgModule({
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule,
    DynamicFormModule,
    AppReactiveFormModule,
    AppRoutingModule,
  ],

  declarations: [
    AppComponent,
    DashboardComponent,
    AppTemplateComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

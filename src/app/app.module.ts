import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import { DynamicFormModule } from "app/dynamic-form/dynamic-form.module";

const router = [
  { path: '', component: AppComponent },
  { path: 'reacitve-form', component: ReactiveFormComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DynamicFormModule,
    RouterModule.forRoot(router)
  ],
  
  declarations: [
    AppComponent,
    ReactiveFormComponent
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
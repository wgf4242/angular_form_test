import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { RouterModule }   from '@angular/router';

import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const router = [
      { path: '', component: AppComponent },
      { path: 'reacitve-form', component: ReactiveFormComponent },
    ];

@NgModule({
  imports: [
     BrowserModule, ReactiveFormsModule ,
         RouterModule.forRoot(router)
  ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, ReactiveFormComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
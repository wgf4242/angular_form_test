import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { AppDynamicFormComponent } from "app/dynamic-form/app.dynamic-form.component";

const routes = [
    { path: 'dynamic-form', component: AppDynamicFormComponent },
];

@NgModule({
    imports: [
        BrowserModule, ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        DynamicFormComponent,
        DynamicFormQuestionComponent,
        AppDynamicFormComponent
    ],
})
export class DynamicFormModule { }
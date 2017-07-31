import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { SimpleFormComp } from "./simple-form.component";
import { SimpleFormGroupComponent } from "./simpile-form-group.components";
import { ReactiveFormComponent } from "./reactive-form.component";
import { MyFormControlComp } from "app/reactive-form/my-form-control.component";
import { AppNestedFormComponent } from "app/reactive-form/nested-form/app-nested-form.component";
import { AppNestedForm2Component } from "app/reactive-form/nested-form2/app-nested-form.component";
import { AddressComponent } from "app/reactive-form/nested-form2/address.component";
import { AppNestedFormBComponent } from "app/reactive-form/nested-form-b/app-nested-form-b.component";

const routes = [
  { path: 'reacitve-form', component: ReactiveFormComponent },
  { path: 'simple-form', component: SimpleFormComp },
  { path: 'simple-form-group', component: SimpleFormGroupComponent },
  { path: 'my-form-control', component: MyFormControlComp },
  { path: 'app-nested-form', component: AppNestedFormComponent },
  { path: 'app-nested-form2', component: AppNestedForm2Component },
  { path: 'app-nested-form-b', component: AppNestedFormBComponent },

];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],

  declarations: [
    ReactiveFormComponent,
    SimpleFormComp,
    SimpleFormGroupComponent,
    MyFormControlComp,
    AppNestedFormComponent,
    AppNestedForm2Component, AddressComponent,
    AppNestedFormBComponent,
  ],
})
export class AppReactiveFormModule {
}

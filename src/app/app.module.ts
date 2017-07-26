import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DynamicFormModule } from "app/dynamic-form/dynamic-form.module";
import { SimpleFormComp } from "app/reactive-form/simple-form.component";
import { SimpleFormGroupComponent } from "app/reactive-form/simpile-form-group.components";

const routes = [
  // { path: '', AppComponent },
  // { path: '', redirectTo: 'page1', pathMatch: 'full' },
  { path: 'reacitve-form', component: ReactiveFormComponent },
  { path: 'simple-form', component: SimpleFormComp },
  { path: 'simple-form-group', component: SimpleFormGroupComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DynamicFormModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    DashboardComponent,
    SimpleFormComp,
    SimpleFormGroupComponent
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
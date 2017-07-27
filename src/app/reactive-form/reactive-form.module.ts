import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { SimpleFormComp } from "./simple-form.component";
import { SimpleFormGroupComponent } from "./simpile-form-group.components";
import { ReactiveFormComponent } from "./reactive-form.component";

const routes = [
  { path: 'reacitve-form', component: ReactiveFormComponent },
  { path: 'simple-form', component: SimpleFormComp },
  { path: 'simple-form-group', component: SimpleFormGroupComponent },

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
  ],
})
export class ReactiveFormModule {
}
// import { FormsModule } from '@angular/forms' ;  in app.module.ts
// https://angular.io/api/forms/NgForm
import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
 
@Component({
  selector: 'example-app',
  template: `
  <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
  <input name="first" ngModel required #first="ngModel">
  <input name="last" ngModel>
  <button>Submit</button>
</form>

<p>First name value: {{ first.value }}</p>
<p>First name valid: {{ first.valid }}</p>
<p>Form value: {{ f.value | json }}</p>
<p>Form valid: {{ f.valid }}</p>
  `
})
export class SimpleFormComp {
  onSubmit(f: NgForm) {
    console.log(f);  // { first: '', last: '' }
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
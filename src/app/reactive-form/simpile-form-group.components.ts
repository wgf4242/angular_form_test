// https://angular.io/api/forms/FormBuilder

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Http } from '@angular/http';

@Component({
    template: `
<form [formGroup]="form" #f="ngForm" (ngSubmit)="onSubmit()">
    <input formControlName="name" placeholder="name">
    <input formControlName="description" placeholder="description">
    <button>Submit</button>
</form>
    <p>Value: {{ form.value | json }}</p>
    <p>Validation status: {{ form.status }}</p>
        `
    // templateUrl: 'my-component.component.html'
})

export class SimpleFormGroupComponent implements OnInit {

    form: FormGroup;

    constructor(private fbuilder: FormBuilder,
        // private http: Http) { }
    ) { }

    ngOnInit() {
        this.form = this.fbuilder.group({
            name: ['Nancy', Validators.minLength(2)],
            // name: '',
            description: ''
        });
    }

    onSubmit() {
        let formObj = this.form.getRawValue(); // {name: '', description: ''}

        let serializedForm = JSON.stringify(formObj);

        console.log(this.form);
        console.log(this.form.controls['name'].value);
        console.log(formObj);

        // this.http.post("www.domain.com/api", serializedForm)
        //     .subscribe(
        //         data => console.log("success!", data),
        //         error => console.error("couldn't post because", error)
        //     );
    }
}
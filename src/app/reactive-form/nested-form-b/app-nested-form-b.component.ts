import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    templateUrl: 'app-nested-form-b.component.html',
})
export class AppNestedFormBComponent implements OnInit {
    public myForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.myForm = this.formBuilder.group({
            'loginCredentials': this.formBuilder.group({
                'login': ['', Validators.required],
                'email': ['', [Validators.required]],
                'password': ['', Validators.required]
            }),
            'hobbies': this.formBuilder.array([
                this.formBuilder.group({
                    'hobby': ['', Validators.required]
                })
            ])
        });
    }

    removeHobby(index: number) {
        (<FormArray>this.myForm.get('hobbies')).removeAt(index);
    }

    onAddHobby() {
        (<FormArray>this.myForm.get('hobbies')).push(new FormGroup({
            'hobby': new FormControl('', Validators.required)
        }))
    }
    
    onSubmit() {
    }
}
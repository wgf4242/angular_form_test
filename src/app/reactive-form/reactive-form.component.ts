import { Component, OnInit } from '@angular/core';
// import template from './reactive-form.component.html';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { matchingPasswords } from './validators';
@Component({
  selector: 'app',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit() {

    this.addForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    },
      {
        //< --replace args with email_1 and email_2
        validator: matchingPasswords('password', 'password2')
      })

    //我们订阅它的valueChanged可观察属性
    this.addForm.valueChanges.subscribe((value: string) => {
      console.log('form changed to: ', value);
    } );
  };

  addUser() {
    if (this.addForm.valid) {
      var adduser = {
        username: this.addForm.controls['username'].value,
        email: this.addForm.controls['email'].value,
        password: this.addForm.controls['password'].value,
        profile: {
          role: this.addForm.controls['role'].value,
          name: this.addForm.controls['username'].value,
          email: this.addForm.controls['email'].value
        }
      };
      console.log(adduser);// adduser var contains all our form values. store it where you want 
      this.addForm.reset();// this will reset our form values to null 
    }
  }
}

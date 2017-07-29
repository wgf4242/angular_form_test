import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup } from '@angular/forms';

@Component({
  template: `
  <!-- part of some bigger form -->
  <input type="text" ng-control="name" />
  <p>{{name}}</p>
  `,
})
export class MyFormControlComp implements OnInit {


  constructor() {
    var nameControl = new FormControl("Nate");
    var name = nameControl.value; // -> Nate
    // now we can query this control for certain values:
    console.log(nameControl.errors) // -> StringMap<string, any> of errors
    console.log(nameControl.dirty) // -> false
    console.log(nameControl.valid) // -> true

    var personInfo = new FormGroup({
      firstName: new FormControl("Nate"),
      lastName: new FormControl("Murray"),
      zip: new FormControl("90210")
    })

    console.log(personInfo.value); // -> {
    //  firstName: "Nate",
    //  lastName: "Murray",
    //  zip: "90210"
    // }
    // now we can query this control group for certain values, which have sensible
    // values depending on the children Control's values:
    personInfo.errors // -> StringMap<string, any> of errors
    personInfo.dirty // -> false
    personInfo.valid // -> true
    // etc.
  }

  ngOnInit() {

  }

}
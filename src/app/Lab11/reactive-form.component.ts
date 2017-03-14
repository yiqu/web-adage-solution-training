import { Component } from '@angular/core';
import { FormControl, FormGroup , FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'lab11',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveForm {
  heroForm2: FormGroup;
  private list: Object ={};
  private names: Array<string>;

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
   
    this.list = {
      name2: ['', Validators.required ], // <--- the FormControl called "name"
      name3: ['', Validators.required ], 
      street: '',
      city: '',
      state: '',
      zip: '',
      power: '',
      sidekick: ''
  };
    this.names = Object.keys(this.list);
    console.log(this.names);
    this.createForm();
  }

  submitForm(values) {
    console.log("values: " + JSON.stringify(values) );
  }
  heroForm = new FormGroup ({
    name2: new FormControl(),
    name3: new FormControl()
  });

  createForm() {
    this.heroForm2 = this.fb.group(this.list);
  }
}


import {Component, Input} from '@angular/core';

// forms
@Component({
  selector: 'lab8',
  templateUrl: './lab8.component.html',
  styleUrls: ['./lab8.component.css'],
})
export class Lab8Component {

  private textentered: string;
  private result: string;
  private time: string = "daySelected";

  onSubmit(formValues: any){
    this.textentered = formValues;
    this.result = "You submitted at " + new Date();
  }
}
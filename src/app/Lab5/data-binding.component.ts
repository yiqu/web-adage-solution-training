import {Component, Input} from '@angular/core';

@Component({
  selector: 'lab5',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css'],
})
export class Lab5Component {

  private userInput: string = "<b>Enter your html here</b>";

  onKey(event: any) {
    console.log('Submitted: ' + this.userInput);

  }
}
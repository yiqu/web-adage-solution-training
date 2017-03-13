import {Component, Input} from '@angular/core';

@Component({
  selector: 'not-fancy-checkbox',
  templateUrl: './not-fancy-checkbox.component.html',
  styleUrls: ['./not-fancy-checkbox.component.css'],
})
export class NotFancyCheckBoxComponent {

  interests: Object[] = [{name:'Volleyball', checked:false}, 
    {name:'Football', checked:true}, {name:'Tennis', checked:true}];
  
  checkedValue: string;

  check(value) {
    console.log('Checked : ' + JSON.stringify(value));
    this.checkedValue = value.name;
  }
}
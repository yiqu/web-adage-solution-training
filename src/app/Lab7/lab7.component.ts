import {Component, Input} from '@angular/core';

// Using ngIF and ngFor
@Component({
  selector: 'lab7',
  templateUrl: './lab7.component.html',
  styleUrls: ['./lab7.component.css'],
})
export class Lab7Component {

 private show: boolean = false;
 private things: Array<string> = ['A','B','C'];

 onToggle(){
   this.show === true ? false : true;
 }

}
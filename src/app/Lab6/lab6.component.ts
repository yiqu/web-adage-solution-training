import { Component, Input } from '@angular/core';
import { service } from '../shared/service';

// Parent component
@Component({
  selector: 'lab6',
  templateUrl: './lab6.component.html'
})
export class Lab6Component {

  private theNames = ['Johnny', "Kevin", "Robert", "Jake", "Abe", "Eve"];
  
  constructor(private service: service) {
    service.testFunction();
  }
}

// child component
@Component({
  selector: 'lab6-child',
  templateUrl: './lab6-child.component.html'
})
export class Lab6ChildComponent {

  @Input() names: string;

}
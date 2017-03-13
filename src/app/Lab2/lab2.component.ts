import {Component} from '@angular/core';

@Component({
  selector: 'lab2',
  templateUrl: './lab2.component.html'
})
export class Lab2Component {

  private myNumber: number = 42;
  private name: string = "Billy";
  private age: number = 10;

  constructor () {
    console.log("my number is " + this.myNumber);
    // print to console
    this.printPerson(this.name, this.age);
  }

  printPerson (name: string, age: number): void {
    console.log(`Name: ${name}, age: ${age}`);
    console.log(" ${name} ");
  }
}

class Product {
  title: string;
  price: number;
  id: number;
}

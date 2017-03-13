import {Component} from '@angular/core';


/*
 * Lab 2 - Intro to TypeScript
 * Class and inheritance
 * Interfaces
*/
@Component({
  selector: 'lab2',
  templateUrl: './lab2.component.html'
})
export class Lab2Component {

  private myNumber: number = 42;
  private name: string = "Billy";
  private age: number = 10;

  private id: number = 1;
  private duration: number = 99;

  constructor () {
    // print to console
    this.printPerson(this.name, this.age);
    // new product
    let newProduct = new Product(1);
    newProduct.printDetails();
    // new tour
    let newTour = new Tour(this.id, this.duration);
    //newTour.setId(999); // 999 instead of 1
    newTour.setPrice(99999);
    newTour.setTitle("Trip to Taj Mahal");
    newTour.printDetails();

    let newDining = new Dining(this.id, "Shrimp Tika Mashla", 5);
    newDining.setTitle("India Trip");
    newDining.setPrice(11);
    newDining.printDetails();
  }

  printPerson (name: string, age: number): void {
    console.log(`Name: ${name}, age: ${age}`);
    console.log(" ${name} ");
  }
}

// Class and inheritance

class Product {
  private title: string;
  private price: number;
  private id: number;

  constructor (id: number) {
    this.id = id;
  }

  setTitle(title: string){
    this.title = title;
  }
  setPrice(price: number) {
    this.price = price;
  }
  setId(id: number) {
    this.id = id;
  }

  printDetails() {
    console.log('Printing product: ==============');
    console.log(`Title: ${this.title}`);
    console.log(`ID: ${this.id}`);
    console.log(`Price: ${this.price}`);
  }
}

class Tour extends Product {
  private duration: number;

  constructor(id: number, duration: number) {
    super(id);
    this.duration = duration;
  }
  
  printDetails() {
    console.log('Printing Tour: ==============');
    super.printDetails();
    console.log(`Duration: ${this.duration}`);
  }

}

class Dining extends Product {
  private cuisine: string;
  private childPrice: number;

  constructor(id: number, cusine: string, childPrice: number) {
    super(id);
    this.cuisine = cusine;
    this.childPrice = childPrice;
  }

  printDetails() {
    console.log("Printing Dining: ========");
    super.printDetails();
    console.log(`cuisine: ${this.cuisine} , child price: ${this.childPrice}`);
  }
}

// Interfaces
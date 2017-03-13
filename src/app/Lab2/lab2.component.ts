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

  cancelBooking<T extends Cancellable & Product> (c: T) {
    console.log('Cancel cost: ' + c.cancelFee);
    console.log('Price was: ' + c.getTitle());
  }

  printPerson(name: string, age: number): void {
    console.log(`Name: ${name}, age: ${age}`);
  }

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

    let newTourImpl = new TourImp(this.id, 12);
    newTourImpl.setPrice(99999);
    newTourImpl.setTitle("Trip to Taj Mahal");
    newTourImpl.setAvailDate([new Date]);
    newTourImpl.setCancelFee(89);
    newTourImpl.printDetails();
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

  setTitle(title: string): void {
    this.title = title;
  }
  setPrice(price: number): void {
    this.price = price;
  }
  setId(id: number): void {
    this.id = id;
  }
  getTitle(): string {
    return this.title;
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

interface Bookable {
  availableDates: [Date];
  setAvailDate(dates: Array<Date>);
}

interface Cancellable {
  cancelFee: number;
  setCancelFee(fee: number);
}

class TourImp extends Product implements Bookable, Cancellable{
  private duration: number;

  // Need this 2 properties and 2 methids impl from the 2 Interfaces
  availableDates: [Date];
  cancelFee: number;
  setAvailDate(dates: [Date]) {
    this.availableDates = dates;
  }
  setCancelFee(fee: number) {
    this.cancelFee = fee;
  }

  constructor(id: number, duration: number) {
    super(id);
    this.duration = duration;
  }
  
  printDetails() {
    console.log('Printing Tour: ==============');
    super.printDetails();
    console.log(`Duration: ${this.duration}`);
    console.log(`Avail: ${this.availableDates}`);
    console.log(`Cancel Fee: ${this.cancelFee}`);
  }
}

// Generics


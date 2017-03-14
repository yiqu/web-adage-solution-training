import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * This singleton service is injected
 */

@Injectable()
export class service {

  /**
   * Constructor to create a new GithubUsersService with the injected Http.
   * 
   * @param {Http} http - injected http component
   */
  constructor(private http: Http) {
  }

  testFunction() {
    console.log('Test from service!');
  }
}
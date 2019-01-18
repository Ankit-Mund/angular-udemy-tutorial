import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';       //return an array as an Observable
import { User } from '../models/User'

@Injectable()
export class UserService {
  users: User[];

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        // image : 'http://lorempixel.com/600/600/people/3',
        isActive: true,
        // balance : 100,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'John1',
        lastName: 'Doe1',
        email: 'john1@yahoo.com',
        // image : 'http://lorempixel.com/600/600/people/2',
        isActive: false,
        //  balance : 200,
        registered: new Date('11/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'John2',
        lastName: 'Doe2',
        email: 'john2@outlook.com',
        // image : 'http://lorempixel.com/600/600/people/1',
        isActive: false,
        //  balance : 1000,
        registered: new Date('12/02/2018 08:30:00'),
        hide: true
      }
    ];
  }
  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  addUser(user: User) {
    this.users.unshift(user)
  }
}

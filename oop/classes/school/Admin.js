//  Importing to link the admin to the user, as well as to reuse its constructor

import User from './User.js';

export default class Admin extends User {
  constructor(name, email, birth, role = 'admin') {
    super(name, email, birth, role);
    this.active = true;
  }

  createCourse(courseName, seats) {
    return `Course ${courseName} created with ${seats} seats.`;
  }
}
import User from './User.js';

export class Store extends User {
  constructor(name, email, role = "store", ein, phone) {
    super(name, email, role);
    this.ein = ein;
    this.phone = phone;
  }
}

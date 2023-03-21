import User from './User.js';

export class Customer extends User {
  constructor(name, email, ssn, phone, address, role = "customer") {
    super(name, email, role);
    this.ssn = ssn;
    this.phone = phone;
    this.address = address;
  }
} 
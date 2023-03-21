//  Class declaration, the alternative to creating classes with prototypes
export default class User {  
  constructor(name, email, role) {
    this.name = name;
    this.email = email;
    this.role = role;
  }

  showInfo() {
    return `${this.name} (${this.email}): ${this.role}.`
  }
}
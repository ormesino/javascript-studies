{ // Using .prototype to exemplify how inheritance is created without using classes
  function User(name, email) {
    this.name = name;
    this.email = email;

    this.showInfo = function () {
      return `${this.name}, ${this.email}`;
    }
  }

  /* const newUser = new User("Jorge", "jorge@gmail.com");
  console.log(newUser.showInfo()); */

  function Admin(name, email, role) {
    User.call(this, name, email);
    this.role = role;
  }

  Admin.prototype = Object.create(User.prototype);  // Getting the prototype of User and passing it to Admin
  const newUser2 = new Admin('Pedro', 'pedro@gmail.com', 'admin');
  console.log(newUser2.showInfo());
  console.log(newUser2.role);
}

{ // Another way to create objects, this time using the init method
  const user = {
    init: function (name, email) { 
      this.name = name;
      this.email = email;
    },

    showInfo: function () {
      return this.name;
    }
  }

  /* const newUser = Object.create(user);
  console.log(newUser.showInfo("Pedro"));
  console.log(user.isPrototypeOf(newUser)); */

  const newUser = Object.create(user);
  newUser.init("Pedro", "pedro@gmail.com");
  console.log(newUser.showInfo());
}
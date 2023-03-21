//  This file was created to be the "main" of the folder, where we will address all other .js files

import Admin from './Admin.js';
import Teacher from './Teacher.js';
import User from './User.js';

try {
  const newUser = new User('Pedro', 'pedro@gmail.com', '1997-02-18');
  console.log(newUser);
  console.log(newUser.showInfo() + "\n\n");

  const newAdmin = new Admin("Mateus", 'mateus@gmail.com', '1991-09-14');
  console.log(newAdmin);
  console.log(newAdmin.showInfo());
  console.log(newAdmin.createCourse("NodeJS", "30"));
  newAdmin.nome = "";     //  Because there is a set method, we can modify a private attribute
  console.log(newAdmin.name + "\n\n");     //  Although the attribute is private, we can access it through the get method.

  const newTeacher = new Teacher("Julia", "julia@gmail.com", "1989-02-17");
  console.log(newTeacher);
  console.log(newTeacher.studentAproval("Juliana", "JS"));
} catch (err) {
  console.log(err.message);
}

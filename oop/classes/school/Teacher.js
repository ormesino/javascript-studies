//  Importing to link the teacher to the user, as well as to reuse its constructor

import User from './User.js'

export default class Teacher extends User {
  constructor(name, email, birth, role = 'teacher') {
    super(name, email, birth, role);
    this.ativo = true;
  }

  studentAproval(student, course) {
    return `Student ${student} passed the course ${course}.`;
  }
}
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof name === 'string') {
      throw new Error('name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof length === 'number') {
      throw new Error('length must be a number');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new Error('students must be an array');
    }
    newStudents.every((ele) => {
      if (typeof ele !== 'string') {
        throw new Error('students must be an array of strings');
      }
    });
    this._students = newStudents;
  }
}

//Decorator Method
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
  return obj;
}

var salva = createNewPerson('Salva');
salva.name;
salva.greeting();


//Psuedoclassical
// Downside is that it recreates this function for every new instance
// Fix by attaching function to the prototype instead
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

var person1 = new Person('Bob');
var person2 = new Person('Sarah');

//Object constructor
var person1 = new Object();
person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
};

//Object.create 
//	(this creates an object with whose prototype 
//	points to the object provided as a param)
var person2 = Object.create(person1);
person2.name
person2.greeting()

//Modifying the prototype
Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
}

//Inheritance
//	A child can inherit from the master class by calling the parent in the instantiation
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}
//	However, this poses a problem because now the constructor 
//	and prototype do not also point to the parent so we have 
//	to adjust these
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
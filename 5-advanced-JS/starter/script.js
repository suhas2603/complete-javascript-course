/////////////////////////////
// Lecture: Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge  = function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/




/////////////////////////////
// Lecture: Object.create
/*

//note the var name not being capitalised showing it is not a function constructor
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

Difference between function constructor and object.create
//Object.create builds the object that inherits directly from the passed in argument

//whereas

//with the function constructor the newly created object inherits directly from the constructor's prototype property


var john = Object.create(personProto);
//this uses the object property to create an object
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

//this uses the object property to create an object, the .create method
// takes a second argument to create the other properties of the object
// however the properties and values are to be assigned in a special way

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});

//one of the biggest benefits of object.create is that it allows us to implement
// a really complex inheritant structures in an easier way than function constructors 
// because it allows us to directly specify which object should be a prototype.

*/


/**
Primitives versus objects
We basically know that only numbers,strings, booleans, undefined, and null
are primitives and that everything else are objects.
So a big difference between primitives and objects is that variables containing primitives
actually hold that data inside of the variable itself. On objects it's very different.
Variables associated with objects do not actually contain the object,
but instead they contain a reference to the place in memory where the object sits, so where the object is stored.
So again a variable declared as an object does not have a real copy of the object it just points to that object.
 * 

 Since variables normally contain the memory location to where the object is located,
 an object can be changed even within a function. 

 But in case of a primitive, when the primitive is passed as an argument to a function, a new copy of
 the primitive is created to be used within the function and the original primitive value outside of the function remains as is.

 And in case of objects when an object is passed as an argument to a function ,
since it is the location of the object that is actually passed, the original object gets changed. this means
the object comepletely gets mutated or modified even if its inside or outside of the function.

 * 
 */
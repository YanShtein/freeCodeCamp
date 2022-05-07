// notice the order of inheritance!!! if building empty function and then adding prototype first comes inheritance and protoype and then add methods etc....
Animal.prototype = {
	constructor: Animal,
	hasLegs: 'Yes',
	hasHands: 'Yes',
	eat() {
		return 'Eats specific food.'
	}
};

function Human(name, age) { //Human - constructor function that creates new objects/properties
	this.name = name; // this inside the constructor always refers to the object being created.
	this.age = age;
	this.sayName = function() {
		return `Hello ${this.name}`
	};
};
// Human.prototype.hands = 2;

function Birds(type) {
	this.type = type;
	this.fly = function() {
		return 'Can fly long distances'
	};
};

function Dogs() {}
Dogs.prototype = Object.create(Animal.prototype)
Dogs.prototype.constructor = Dogs

function Animal() {}

Dogs.prototype.bark = function() {
	return 'can bark';
};

Human.prototype = Object.create(Animal.prototype)
Human.prototype.constructor = Human // human1 & all other persons should show that they were constructed from Human and not from Animal
let human1 = new Human("Yana", 30) // new operator is used when calling a constructor // human1 inherits in prototype from Human constructor function
console.log(`${human1.name} is ${human1.age} years old. has legs? ${human1.hasLegs}, has hands? ${human1.hasHands}. \n what ${human1.name} eats? ${human1.eat()}`)
console.log(human1.constructor) // who is the constructor of human1?
console.log(human1 instanceof Human)

Birds.prototype = Object.create(Animal.prototype)
Birds.prototype.constructor = Birds
let bird1 = new Birds('parrot')
console.log(`${bird1.type} ${bird1.fly()}. has legs? ${bird1.hasLegs}, has hands? ${bird1.hasHands}. \n what ${bird1.type} eats? ${bird1.eat()}`)
console.log(bird1.constructor)
console.log(bird1 instanceof Birds)

let dog1 = new Dogs()
console.log(dog1.bark(), dog1.eat())

let tailMixin = function(obj) {
	obj.tail = function() {
		return 'has a tail';
	};
};

tailMixin(dog1)
console.log(dog1.tail())

// console.log(Human instanceof Animal) // Human isnt instanceof Animal, it only inherits the properties from it!!!!

// let personsProp = [];
// let personsPrototype = [];
// for (let prop in human1) {
// 	if (human1.hasOwnProperty(prop)) {
// 		personsProp.push(prop);
// 	} else {
// 		personsPrototype.push(prop);
// 	};
// };
// console.log(personsProp,'\n',personsPrototype);

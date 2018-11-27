// console.log('ES6');

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.say = function () {
	console.log('someone said...');
};

Person.show = function () {
	console.log('Person show...');
};

class Animal {
	constructor (name, age){
		this.name = name;
		this.age = age;
	}

	eat() {
		console.log('some animals eat....')
	};

	static sleep () {
		console.log('some animals sleep...');
	};
}

const person = new Person('zs', 18);
console.log(person);
person.say();

const animal = new Animal('big yellow', 3);
console.log(animal);
animal.eat();
Animal.sleep();
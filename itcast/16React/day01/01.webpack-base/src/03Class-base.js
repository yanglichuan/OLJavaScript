function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.info = 'person info';

const person = new Person('zs', 18);
console.log(person);
console.log(Person.info);

class Animal {
	constructor (name, age){
		this.name = name;
		this.age = age;
	}
	// ES6并不支持这种写法的静态属性，而ES7是可以的。
	// static info = "animal's info";
}

const animal = new Animal('big yellow', 3);
console.log(animal);
console.log(Animal.info);
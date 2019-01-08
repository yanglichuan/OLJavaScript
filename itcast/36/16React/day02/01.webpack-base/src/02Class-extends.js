class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}

class American extends Person{
	constructor(name, age, address){
		super(name,  age);
		this.address = address;
	}
}

class Chinese extends Person{

}


const a1 = new American('Jack', 21, 'Houston');
console.log(a1);


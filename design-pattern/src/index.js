/*
class Person {
	constructor(name) {
		this.name = name
	}
	getName() {
		return this.name
	}
}

let p = new Person('peter')
alert(p.getName())
*/


/*
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	eat(){
		alert(`${this.name} eat something..`)
	}

	speak(){
		alert(`${this.name} said Peter is ${this.age} years old...`)
	}
}

class Student extends Person {
	constructor(name, age, number) {
		super(name, age)
		this.number = number
	}

	study(){
		alert(`${this.name} number is ${this.number}, his age is ${this.age}`)
	}
}

let zs = new Student('zs', 20, 'A1')
zs.eat()
zs.study()

let ls = new Student('ls', 22, 'A2')
ls.study()
ls.speak()
*/


/* promise 用法
function loadImg(src) {
	let promise = new Promise(function (resolve, reject) {
		let img = document.createElement('img')
		img.onload = function (){
			resolve(img)
		}
		img.onerror = function(){
			reject('图片加载失败')
		}
		img.src = src
	})
	return promise
}

let src = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1474221964,4180034495&fm=27&gp=0.jpg'
let result = loadImg(src)

result.then(function(img) {
	alert(`width: ${img.width}`)
	return img
}).then(function(img) {
	alert(`height: ${img.height}`)
}).catch(function (ex) {
	alert(ex)
})
*/


/* 计程车有车牌号、车名，也有专车快车之分，其中专车每公里2元、快车每公里1元、行程开始时显示车名与车牌号，行程结束时显示总共的花费
class Car {
	constructor (num, name) {
		this.num = num
		this.name = name
	}
}

class QuickCar extends Car{
	constructor(num, name) {
		super(num, name)
		this.price = 1
	}
}

class SpecCar extends Car{
	constructor(num, name) {
		super(num, name)
		this.price = 2
	}
}

class Trip {
	constructor(car){
		this.car = car
	}
	star(){
		console.log(`该车：${this.car.name},车牌号：${this.car.num}`)
	}

	end(){
		console.log('总共花费了' + this.car.price * 5)
	}
}

let car = new QuickCar(100, "大众")
let trip = new Trip(car)
trip.star()
trip.end()
*/


// 某停车场有3层，每层有100个车位，每辆车开进之前，显示车库的剩余车位，开进时显示车牌号与时间，离开时显示车牌号与停留时间
class Park {
	constructor(car) {
		this.car = car
	}  
}

class Car {
	constructor(number) {
		this.number = number
	}
}

let car1 = new Car(1001)
let car2 = new Car(1002)






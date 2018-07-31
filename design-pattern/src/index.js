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

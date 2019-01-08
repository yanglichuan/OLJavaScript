function test(){
    // 块作用域 let只能在for循环内起作用，var定义的外面也可以
    for(var i = 0; i<3; i++) {
        console.log(i);
    }
    console.log(i);
}

test();


var tmp = new Date();
console.log(tmp);
function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined 原因是var修饰的变量在函数调用之后，变量提升了，if里面修饰的变量提升到函数内，而这个是时候
// 没有赋值，所以undefined

var str = 'hello';
for(var i=0; i<5; i++){
    console.log(str[i]);
}
console.log(i);

const PI = 3.1415;
// PI = 8;  // SyntaxError: "PI" is read-only
console.log(PI);
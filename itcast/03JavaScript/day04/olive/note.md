#Note
函数声明、函数表达式

```javascript
        function f3(){
            console.log("f3....");
        }
        f3();

        function f3(){
            console.log("f3 2.....");
        }
        f3();

        // 只要重名了，不管你在哪，下面的都会覆盖掉上面的。
```

```javascript
        function f4(){
            console.log("f4 ...");
        }
        f4();
        f4 = function(){
            console.log("f4 2....");
        }
        f4();
```



## 作用域

### 全局变量

### 全局作用域

### 局部作用域

### 块级作用域

### 隐式全局变量

声明的变量没有var 就叫隐式全局变量 
全局变量不能被删除的，隐式全局变量是可以被删除的

## #
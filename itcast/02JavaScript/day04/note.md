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


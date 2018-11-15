##Note
单标签无法用 innerText来修改值，比如
```javascript
var inputs = document.getElementsByTagName("input");
        for(var i=0; i<inputs.length; i++){
            inputs[i].onclick = function(){
                for(var j=0; j<inputs.length; j++){
                    inputs[j].value = "没有";
                }
                this.value = "有了";
                // inputs[i].value = "有了";  // 为何这样写不行？？？
            };
        }

        // for(k = 0 ; k < 5; k ++) {}
        // console.log(k);
```


注意： href="";
里面值必须是完整的路径 www.baidu.com 这样是不对的，跳转不过去，必须 http://www.baidu.com


getElementsByTagName  || getElementsByName 两者的区别要注意了。
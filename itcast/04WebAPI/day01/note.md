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


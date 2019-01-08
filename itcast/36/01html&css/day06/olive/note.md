#Note
##高度剩余法
给文字所在的标签添加高度，来撑开盒子的高度，从而达到样式的要求

##注意点
当一个盒子中有两个定位，一左一右的时候，如果在父类中写了left:0 另外一个单独写right:0 这样是不行的。必须都要单独拎出来写

```html
.tb a {
    width: 24px;
    height: 30px;
    position: absolution;
    /* left:0 不能这样，如果这样写了，两个都会在左边 */
}
.left {
    left: 0;
}
.right {
    right: 0;
}
```


##浮动
普通标准流下，如果父类没有高度，子类的高度会撑开父类盒子，而如果子类是float的话，子类本身不计算高度，此时父类的高度就没有了。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ClearFloat</title>
    <style>
    .father {
        width: 300px;
        border: 1px solid red;
    }
    .big {
        width: 100px;
        height: 100px;
        background-color: #ff0;
    }
    .small {
        width: 80px;
        height: 80px;
        background-color: #0ff;
        
    }

    .footer {
        width: 400px;
        height: 100px;
        background-color: pink;
    }
    </style>
</head>
<body>
    <div class="father">
        <div class="big"></div>
        <div class="small"></div>
    </div>
    <div class="footer"></div>
</body>
</html>
```
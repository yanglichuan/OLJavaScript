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
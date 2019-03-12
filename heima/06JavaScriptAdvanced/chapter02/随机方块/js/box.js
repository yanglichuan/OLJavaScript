function Box(parent, options){
    options = options || {};
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.backgroundColor = options.backgroundColor || "red";

    this.div = document.createElement("div");
    parent.appendChild(this.div);
    this.parent = parent;

    this.init();
}

Box.prototype.init = function(){
    var style = this.div.style;
    style.x = this.x + "px";
    style.y = this.y + "px";
    style.width = this.width + "px";
    style.height = this.height + "px";
    style.backgroundColor = this.backgroundColor;
    style.position = "absolute";
}

Box.prototype.random = function(){
    // 横排能够摆放盒子的个数
    var boxWidthNum = this.parent.offsetWidth / this.width;
    var boxHeightNum = this.parent.offsetHeight / this.height;
    var x = Tools.getRandom(0, boxWidthNum-1) * this.width;
    var y = Tools.getRandom(0, boxHeightNum - 1) * this.height;
    this.div.style.left = x + "px";
    this.div.style.top = y + "px";
}
function Box(parent, options) {
    options = options || {};
    this.width = options.width || "20";
    this.height = options.height || "20";
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.backgroundColor = options.backgroundColor || "red";

    this.div = document.createElement("div");
    // this.parent = document.getElementById("container");
    parent.appendChild(this.div);

    this.init();
}

Box.prototype.init = function() {
    // var container = document.getElementById("container");
    var style = this.div.style;
    style.width = this.width + "px";
    style.height = this.height + "px";
    style.x = this.x + 'px';
    style.y = this.y + 'px';
    style.backgroundColor = this.backgroundColor;
    style.options = "absolute";

    // container.appendChild(this.div);
}

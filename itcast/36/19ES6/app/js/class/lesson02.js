{
    let a, b, rest;
    [a, b] = [1, 2];
    console.log(a, b);
}

{
    let a, b, c, rest;
    [a, b, c=3] = [1, 2];
    console.log(a, b);
}

{
    let o = {p: 43, q: true};
    let {p, q} = o;
    console.log(p, q);
}

{
    let {a=10, b=5} = {a: 3};
    console.log(a, b)
}

{
    let data = {
        title: "aaa", 
        desc: [{
            title: "bbbb",
            comments: "com..",
        }],
    }
    let {title: aTitle, desc:[{title: bTitle}]} = data;
    console.log(aTitle, bTitle);
}
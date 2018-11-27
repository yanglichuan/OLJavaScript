// 假设 main.js 入口文件
console.log('Welcome');


import React from 'react'
import ReactDOM from 'react-dom'


const ele = React.createElement('h1', null, 'This is a Text');
const mydiv = React.createElement('div', null, 'This is a div', ele);
ReactDOM.render(mydiv,  document.getElementById("app"));
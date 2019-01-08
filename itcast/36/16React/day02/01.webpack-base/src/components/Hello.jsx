import React from 'react'

/* 定义组件 */
function Hello(props){
	console.log(props);
	// 不管是vue还是RN 这里的props都不能被重新赋值，因为这是只读属性
	return <div>这是一个Hello组件 -- {props.name} --- {props.age} --- {props.gender}</div>;
}

export default Hello


import React from 'react'
import ReactDOM from 'react-dom'
// import '@/03Movie'
import CommentList from '@/components/CommentList'

class Movie extends React.Component {
	constructor(){
		super();
		this.state = {
			msg: '这里的msg相当于Vue里面的data'
		}
	}
	render(){

		this.state.msg = '修改了msg的值'

		return <div>
			这是一个Movie组件: {this.props.name} --- {this.props.age} super = === {this.props.gender}
			<h4>{this.state.msg}</h4>
		</div>
	}
}


const User = {
	name: 'zs',
	age: 22,
	gender: '男'
};

ReactDOM.render( <div>
	{/*Movie组件*/}
	{/*<Movie {...User}></Movie>*/}

	<CommentList></CommentList>
</div> ,document.getElementById('app'));
import React from 'react'
import ReactDOM from 'react-dom'
// import '@/03Movie'

class Movie extends React.Component {
	render(){
		return <div>这是一个Movie组件: {this.props.name} --- {this.props.age} super = === {this.props.gender}</div>
	}
}

const User = {
	name: 'zs',
	age: 22,
	gender: '男'
};

ReactDOM.render( <div>
	123
	<Movie {...User}></Movie>
</div> ,document.getElementById('app'));
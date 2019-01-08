import React from 'react'
import ReactDOM from 'react-dom'
// import '@/03Movie'
import '@/components/CommentItem'
// import './components/CommentList'

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



class CommentList extends React.Component{
	constructor(){
		super();
		this.state = {
			CommentList: [ // 评论列表数据
				{id: 1, user: '张三', content: '哈哈，沙发'},
				{id: 2, user: '李四', content: '哈哈，板凳'},
				{id: 3, user: '王五', content: '哈哈，凉席'},
				{id: 4, user: '赵六', content: '哈哈，砖头'},
				{id: 5, user: '田七', content: '哈哈，楼下山炮'}
			]
		}
	}

	render(){

		return <div>
			{this.state.CommentList.map(item => <CommentItem key={item.id} {...item}></CommentItem>) }
		</div>;
	};
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
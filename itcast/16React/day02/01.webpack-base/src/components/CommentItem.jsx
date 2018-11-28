import React from 'react'

export default function CommentItem(props){
	return <div>
		<span>
		<h3>评论人：{props.user}</h3>
		<p>评论内容：{props.content}</p>
		</span>
	</div>;
}
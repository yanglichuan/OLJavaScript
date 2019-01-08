import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '@/components/Hello'

const dog = {
	name: 'big yellow',
	age: 3,
	gender: 'f',
};


ReactDOM.render( <div>
	123
		<Hello name={dog.name} age={dog.age} gender={dog.gender}>

		</Hello>
	</div> ,
	document.getElementById('app'));
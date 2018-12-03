import React, { Component } from 'react';


export default class TodoItem extends Component {

    constructor(props){
        super(props);
        // this.handleDelete = this.handleDelete.band(this);
    }

    render (){
        return <div onClick={this.handleDelete}>
                {this.props.content}
            </div>
    }

    handleDelete(){
        alert(1);
    };
}
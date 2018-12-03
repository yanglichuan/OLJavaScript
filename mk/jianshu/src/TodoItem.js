import React, { Component } from 'react';


export default class TodoItem extends Component {

    constructor(props){
        super(props);
        // this.handleDelete = this.handleDelete.band(this);
    }

    render (){
        {/** 如果在这里面写 this.handleDelete.bind(this)有性能损耗问题 */}
        return <div onClick={this.handleDelete.bind(this)}>
                {this.props.content}
            </div>
    }

    handleDelete(){
        this.props.deleteItem(this.props.index);
    };
}
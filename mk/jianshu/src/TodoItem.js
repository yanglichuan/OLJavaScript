import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class TodoItem extends Component {

    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.band(this);
    }

    render (){
        {/** 如果在这里面写 this.handleDelete.bind(this)有性能损耗问题 */}
        const { content, test } = this.props;
        return (<div onClick={this.handleDelete}>
                { test }--{ content }
            </div>)
    }

    handleDelete(){
        const { deleteItem, index } = this.props;
        deleteItem(index);
    };
}

// 要求属性默认类型，在代码调试阶段有重要的意义
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number,
}

TodoItem.defaultProps = {
    test: 'hello world'
}
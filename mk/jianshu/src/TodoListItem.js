import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';
// 样式一般来说在组件之后

export default class  TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputStr: "", 
            list: [],
            // preState = 
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    render() {
        return <Fragment>
                    <div>
                        <label htmlFor="insertArea">输入</label>
                        <input id="insertArea" className="input" type='text' 
                               value={this.state.inputStr} 
                               onChange={this.handleInputChange}/>
                        <button onClick={this.handleButtonClick}>提交</button>
                    </div>
                    <ul>
                        {this.getTodoItem()}
                    </ul>
                </Fragment>
    };

    getTodoItem(){
        return this.state.list.map((item, index) => {
            return <TodoItem 
                content={item} 
                key={index} 
                index={index}
                deleteItem = {this.handleDeleteClick}
                />;
        })
    }

    handleInputChange(e){
        const value = e.target.value;
        this.setState(()=>({
            inputStr: value,
        }));
    };

    handleButtonClick(){
        this.setState((preState) => ({
            list: [...preState.list, preState.inputStr],
            inputStr: "",
        }));
    };

    handleDeleteClick(index){        
        this.setState((preState) => {
            const list = [...preState.list];
            list.splice(index, 1);    
            return {list};
        });

        // this.setState(() => {
        //     const a = 1;
        // });

        // var sum = (num1, num2) => ({ id: 1, name:'zs' });
        // alert(sum(3,4));
    };
}
import React, {Component, Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';

export default class  TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputStr: "", 
            list: [],
        };
    }

    render() {
        return <Fragment>
                    <div>
                        <label htmlFor="insertArea">输入</label>
                        <input id="insertArea" className="input" type='text' value={this.state.inputStr} onChange={this.handleInputChange.bind(this)}/>
                        <button onClick={this.handleButtonClick.bind(this)}>提交</button>
                    </div>
                    {/**/}
                    <ul>
                        {
                            this.state.list.map((item, index) => {
                                return <TodoItem content={item} key={index}/>;
                            })
                         }
                    </ul>
                </Fragment>
    };

    handleInputChange(e){
        this.setState({
            inputStr: e.target.value,
        });
    };

    handleButtonClick(){
        this.setState({
            list: [...this.state.list, this.state.inputStr],
            inputStr: "",
        });
    };

    handleDeleteClick(index){
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list,
        });
    };
}
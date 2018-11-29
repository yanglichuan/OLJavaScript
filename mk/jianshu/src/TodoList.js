import React, {Component, Fragment} from 'react';


export default class  TodoList extends Component {
    render() {
        return <Fragment>
                    <div>
                        <input type='text' /><button>提交</button>
                    </div>
                    <ul>
                        <li>英语</li>
                        <li>韩语</li>
                    </ul>
                </Fragment>
    };
}
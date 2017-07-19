import React from 'react';
import ReactDOM from 'react-dom';
import Task from './task';
import Tasks from './tasks';

class ToDo extends React.Component {

    componentDidMount() {
        const el = ReactDOM.findDOMNode(this.refs.first);
        ReactDOM.findDOMNode(this.refs.first);
        console.log(el);
    }

    render() {
        return (
            <Tasks>
                <Task ref='first' done name="OptionA" />
                <Task done name="OptionB" />
                <Task done={false} name="OptionC" />
                <Task ref="fourth" name="OptionD" />
            </Tasks>
        )
    }

}

export default ToDo;
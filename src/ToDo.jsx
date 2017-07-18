import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';

class ToDo extends React.Component {

    componentDidMount() {
        const el = ReactDOM.findDOMNode(this.refs.first);
        console.log(this.refs);
        ReactDOM.findDOMNode(this.refs.first);
        console.log(el);
    }

    render() {
        return (
            <ul>
                <Task ref='first' done name="OptionA" />
                <Task done name="OptionB" />
                <Task done={false} name="OptionC" />
                <Task ref="fourth" name="OptionD" />
            </ul>
        )
    }

}

export default ToDo;
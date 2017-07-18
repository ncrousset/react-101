import React from 'react';
import Task from './Task';

class ToDo extends React.Component {

    render() {
        return (
            <ul>
                <Task done name="OptionA" />
                <Task done name="OptionB" />
                <Task done={false} name="OptionC" />
                <Task/>
            </ul>
        )
    }

}

export default ToDo;
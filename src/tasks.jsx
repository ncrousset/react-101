import React from 'react';

class Tasks extends React.Component {

    render() {
        return(
            <ul>
                { this.props.children }
            </ul>
        )
    }
};

export default Tasks;

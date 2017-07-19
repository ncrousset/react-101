import React from 'react';
import Hello from './hello-example-2';

class Messages extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <Hello name="Natanael" />
            </div>
        )
    }

}

export default Messages;
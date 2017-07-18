import React from 'react';

class Hello extends React.Component {
    render() {
        return React.DOM.h1(
            {className: 'mystyle myStyle1 col'}, `Hello ${this.props.name} - ${this.props.id}!`
        );
    }
}

export default Hello;
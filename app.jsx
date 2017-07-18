import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './chapter-0/hello';
import Hello from './chapter-1/hello-example-1';
import Link from './chapter-1/link';
import Messages from './chapter-1/messages';

//ReactDOM.render(<Hello name='React' id="my-h1" />, document.getElementById('container'));

class App extends React.Component {

    render() {
        const url = 'http://soyrudys.com';

        return (
            <div>
                <Messages/>
                <nav>
                    <Link url={url} caption="My site" /><br/>
                    <Link url='https://github.com/ncrousset' caption="My github" />
                </nav>
            </div>
        )

    }

};

ReactDOM.render(<App/>, document.getElementById('container'));
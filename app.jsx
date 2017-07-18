import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './chapter-0/hello';
import Hello from './chapter-1/hello-example-1';
import Link from './chapter-1/link';
import Messages from './chapter-1/messages';
import ToDo from './src/ToDo';

//ReactDOM.render(<Hello name='React' id="my-h1" />, document.getElementById('container'));

class App extends React.Component {

    render() {
        const url = 'http://soyrudys.com';

        return (
            <div>
                <Messages/>
                <nav>
                    <Link url={url} caption="My site" color="red full" /><br/>
                    <Link url='https://github.com/ncrousset' caption="My github" color="blue" /><br/>
                    <Link url='https://github.com/ncrousset' caption="My test" />
                </nav>

                <div>
                    <h1>Tasks</h1>
                    <ToDo/>
                </div>

            </div>
        )

    }

};

ReactDOM.render(<App/>, document.getElementById('container'));
import React, { Component } from 'react';

import SinglePage from './containers/SinglePage';
import CounterPage from './containers/CounterPage';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <SinglePage />
                    <hr/>
                    <CounterPage/>
                </div>
            </div>
        );
    }
}

export default App;

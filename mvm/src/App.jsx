import React, { Component } from 'react';

import SinglePage from './containers/SinglePage';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <SinglePage />
                </div>
            </div>
        );
    }
}

export default App;

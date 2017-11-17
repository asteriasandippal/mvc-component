import React, { Component } from 'react';

import SinglePageButton from './containers/SinglePageButton';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <SinglePageButton />
                </div>
            </div>
        );
    }
}

export default App;

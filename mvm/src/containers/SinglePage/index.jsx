import React from 'react';

import {Switch, Route, Link} from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';

const NavigationSinglePageButton = props => (
    <div>
        <Link className="btn btn-primary" to="/">Home</Link>
        <Link className="btn btn-primary" to="/about">About</Link>
    </div>
);

class SinglePage extends React.Component {

    render() {
        return (
            <div>
                <NavigationSinglePageButton />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                </Switch>
            </div>
        );
    }
}

export default SinglePage;

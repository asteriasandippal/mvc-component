import React from 'react';

const NavigationSinglePageButton = props => (
    <div>
        <button className="btn btn-primary" onClick={props.gotoHome}>Home</button>
        <button className="btn btn-primary" onClick={props.gotoAbout}>About</button>
    </div>
);

const HomePage = () => (
    <div>
        <h4>Home Page</h4>
        <p>When using button classes on elements that are used to trigger in-page functionality
                (like collapsing content), rather than linking to new pages or sections within
                the current page, these links should be given a role=button to appropriately
                 convey their purpose to assistive technologies such as screen readers.
        </p>
    </div>
);

const AboutPage = () => (
    <div>
        <h4>About Page</h4>
        <p>Jay Garcia is co-founder and managing director at Modus Create. He is a U.S. Air Force
            veteran with 20 plus years of technology and consulting experience in leading
            RIA development for companies around the world. He is co-organizer of the
            NoVa.JS and NYC.JS meetups, and is actively involved in the software communities
            that provide business frameworks and technologies, which enable rich mobile and
            desktop web experiences..
        </p>
    </div>
);

class SinglePageButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            view: '',
        };
        this.gotoAbout = this.gotoAbout.bind(this);
        this.gotoHome = this.gotoHome.bind(this);
    }
    gotoAbout() {
        this.setState({
            view: <AboutPage />,
        });
    }

    gotoHome() {
        this.setState({
            view: <HomePage />,
        });
    }

    render() {
        return (
            <div>
                <NavigationSinglePageButton gotoAbout={this.gotoAbout} gotoHome={this.gotoHome} />
                {this.state.view || <HomePage />}
            </div>
        );
    }
}

export default SinglePageButton;

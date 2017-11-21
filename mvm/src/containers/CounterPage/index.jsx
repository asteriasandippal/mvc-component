import React from 'react';
import { incrementCount } from './../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CounterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick() {
        this.setState({
            count : this.state.count + 1
        });
        this.props.incrementCount(this.state.count);
    }

    render() {
        console.log(this.props.counterProps);
        return (
            <div className="counter-container">
                <h4>Counter: {this.props.counterProps}</h4>
                <button className="btn btn-primary"
                        onClick={() => this.handleClick()}>Increment Counter</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counterProps: state.increment
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({incrementCount}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);

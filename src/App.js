import React from 'react';
import {connect} from "react-redux";


class App extends React.Component {

    state = {
        counter: this.props.globalCounter,
        globalCounterCopy: 0
    };

    handleClick = () => {
        this.setState({counter: this.state.counter + 1});
    };

    addToGlobalCounter = () => {
        this.props.addToGlobalCounter();
        this.setState({globalCounterCopy: this.props.globalCounter})
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick} id={'local-btn'}>Add Locally</button>
                <button onClick={this.addToGlobalCounter} id={'global-btn'}>Add Globally</button>
                <h1 id={'all-text'}>{this.state.counter + this.props.globalCounter}</h1>
                <h3 id={'local-text'}>Local: {this.state.counter}</h3>
                <h3 id={'global-text'}>Global: {this.props.globalCounter}</h3>
                <h3 id={'global-copy-text'}>Global Copy: {this.state.globalCounterCopy}</h3>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        globalCounter: state.sample.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addToGlobalCounter: () => dispatch({type: "ADD_GLOBAL_COUNTER"})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



import React, { Component } from 'react'
import { increment, decrement } from '../actions';
// import ClassCounter from './ClassCounter';
import { connect } from 'react-redux';

class ClassCounter extends Component {
    render() {
        const {counter,increment,decrement} = this.props;
        return (
            <div>
                <h1>current count is: {counter}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>decrement</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state,
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        increment : () => dispatch(increment()),
        decrement : () => dispatch(decrement()),
    }
}

export default connect (mapStateToProps,mapDispatchToprops) (ClassCounter);

// export default ClassCounter

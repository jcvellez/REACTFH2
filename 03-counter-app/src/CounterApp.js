import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
    return (
        <>
            <h1> CounterApp </h1>
            <p> {value} </p>
            <button>+1</button>
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number
}

export {
    CounterApp
};
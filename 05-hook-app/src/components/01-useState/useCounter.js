import React, { useState } from 'react'
import PropTypes from 'prop-types'

const useCounter = (inicialState) => {
    const [counter, setCounter] = useState(inicialState);

    let increment = () => {
        setCounter(counter + 1);
    }
    let decrement = () => {
        setCounter(counter - 1);
    }

    let reset = ()=>{
        setCounter(inicialState);
    }
    return {
        counter,
        increment,
        decrement,
        reset
    }
}

//useCounter.propTypes = {}

export default useCounter
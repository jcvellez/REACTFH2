import React, { useState } from 'react'
import PropTypes from 'prop-types'

const useCounter = (valorinicial) => {
    const [state, setState] = useState(valorinicial);

    let increment = (factor) => {
        setState(state + factor);
    }
    let decrement = (factor) => {
        setState(state - factor);
    }

    let reset = ()=>{
        setState(valorinicial);
    }
    return {
        state,
        increment,
        decrement,
        reset
    }
}

//useCounter.propTypes = {}

export default useCounter
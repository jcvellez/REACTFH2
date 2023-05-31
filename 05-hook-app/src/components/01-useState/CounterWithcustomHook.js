import React from 'react'
import PropTypes from 'prop-types'
import './counter.css'
import useCounter from './useCounter'

const CounterWithcustomHook = () => {
    let { state, increment, decrement, reset } = useCounter(100);
    return (
        <>
            <h1>Counter With Hook: {state}</h1>
            <hr></hr>
            <button onClick={() => increment(2)} className='btn btn-primary'>+1</button>
            <button onClick={() => reset()} className='btn btn-success'>reset</button>
            <button onClick={() => decrement(2)} className='btn btn-warning'>-1</button>
        </>
    )
}

CounterWithcustomHook.propTypes = {}

export default CounterWithcustomHook
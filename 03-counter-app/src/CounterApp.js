import React from 'react';
import react, { useState } from 'react'
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [ counter , setCounter ] = useState( value );
    //console.log( state );
    //console.log(counter);
    //handleAdd
    const handleAdd = (e) => {
        setCounter( counter + 1 );
        //setCounter( (c)=>{ c + 1 } )
    }

    const Reset = (e)=>{
        setCounter( value );
    }

    const handleSubstract = (e)=>{
        setCounter( counter - 1 );
    }
    return (
        <>
            <h1> CounterApp </h1>
            <p> { counter } </p>
            <button onClick={handleAdd}>+1</button>
            <button onClick={Reset}>reset</button>
            <button onClick={handleSubstract}>-1</button>
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number
}

export {
    CounterApp
};
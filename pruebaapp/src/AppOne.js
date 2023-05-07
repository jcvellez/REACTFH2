import React, { useState } from 'react'
import PropTypes from 'prop-types'

let AppOne = ({ valor }) => {

    const [miValor, setmiValor] = useState(valor);

    const Sumar5 = (e)=>{
        setmiValor( miValor + 5);
    }

    const Reset = (e)=>{
        setmiValor( valor);
    }

    const Restar5 = (e)=>{
        setmiValor( miValor - 5);
    }

    return (
        <>
            <h2> Mi Multiplicador </h2>
            <h3>{ miValor }</h3>
            <button onClick={ Restar5 } id='boton3' type="button" class="btn btn-success">-5</button>
            <button onClick={ Reset } id='boton2' type="button" class="btn btn-secondary">reset</button>
            <button onClick={ Sumar5 } id='boton1' type="button" class="btn btn-primary">+5</button>
        </>
    )
}


AppOne.propTypes = {
    valor: PropTypes.number
}

export {
    AppOne
};

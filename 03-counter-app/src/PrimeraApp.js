//FC
import React from 'react'
import PropTypes from 'prop-types'

const PrimeraApp = ( { mensaje, otra } ) => {
    //const saludo = 'Hola a todos reacteros';
   
    return (
        <>
            <h1>{ mensaje }</h1>
            {/* <h1>{ JSON.stringify(saludo) }</h1> */}
            <p>{ otra }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    mensaje: PropTypes.string.isRequired,
    otra: PropTypes.string
}

PrimeraApp.defaultProps = {
    otra: 'Este es un valor por defecto'
}
 
export {
    PrimeraApp
}


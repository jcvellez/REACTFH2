import React from 'react'
import PropTypes from 'prop-types'
import useCounter from '../01-useState/useCounter'

const Memorize = () => {

  const { counter, increment }=useCounter( 10 );

  return (
    <div>
        <h1>Memorize</h1>
        <hr></hr>
    </div>
  )
}

//Memorize.propTypes = {}

export default Memorize

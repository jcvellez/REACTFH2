import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useCounter from '../01-useState/useCounter'
import { Small } from './Small';

const Memorize = () => {

  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true)

  return (
    <div>
      <h1>Counter: <Small value={counter} /></h1>
      <hr></hr>

      <button className='btn btn-primary' onClick={increment}>
        +1
      </button>
      <button className='btn btn-outline-primary ml-3' onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}

//Memorize.propTypes = {}

export default Memorize

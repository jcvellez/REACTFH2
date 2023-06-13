import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    const handleChangeShow= ()=>{
        setShow(!show)
    }

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr></hr>
            {show && <MultipleCustomHooks />}
            <button className='btn btn-primary mt-5' onClick={handleChangeShow}>Show/Hide</button>
        </div>
    )
}

//RealExampleRef.propTypes = {}

export default RealExampleRef
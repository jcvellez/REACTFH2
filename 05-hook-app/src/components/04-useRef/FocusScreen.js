import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const FocusScreen = () => {

    const inputRef = useRef();
    
    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
        //document.querySelector('input').select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr></hr>
            <input ref={inputRef} className='form-control' placeholder='Su nombre' ></input>
            <button className='btn btn-outline-primary mt-5' onClick={handleClick}> Focus </button>
        </div>
    )
}

//FocusScreen.pr() = {}

export default FocusScreen
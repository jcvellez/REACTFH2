import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState(''); //Hola Hola
    
    //esta funcio n es la q cambia el texto en el formulario
    const handleinputChange = (e) => {
        setinputValue(e.target.value);        
    }
    

    const handleSubmit = (e) => {
        e.preventDefault(); //para prevenir el comportamiento por defecto del formulario
        //console.log('submit hecho');        
        setCategories( cats=>[...cats , inputValue] )
    }

    return (
        <form onSubmit={handleSubmit} >
            <input type='text' value={inputValue} onChange={handleinputChange}></input>
        </form>
    )
}

//AddCategory.propTypes = {}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory

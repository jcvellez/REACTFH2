import React , { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setcategories }) => {

    const [inputvalue, setinputvalue] = useState('');

    // handleInputChange2= ( e )=>{
    //     setinputvalue( e.target.value);
    // }

    

    return (
        <>
            <form>
                <input type='text' 
                value={ inputvalue } 
                onChange={ <p></p> }
                />
            </form>
        </>
    )
}

//AddCategory.propTypes = {}

export default AddCategory
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './AddCategory';

const GifExpertoApp = () => {

    const [categories, setcategories] = useState(['Primera', 'Segunda', 'Tercera']);
  
    //setcategories( (categories)=>{categories} );
    return (
        <>
            <h2>GifExpertoApp</h2>
            <hr></hr>
            {/* <AddCategory setcategories={ setcategories }/> */}
            <button id='botonAgregar' className="btn btn-success">Agregar</button>
            <ol>
                {
                    categories.map((category, i) =>
                    (
                        <li key={i}>{category}</li>
                    ))
                }
            </ol>
        </>
    )
}

//GifExpertoApp.propTypes = {}

export {
    GifExpertoApp
} 
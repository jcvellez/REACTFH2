import React, { useState } from 'react'
import PropTypes from 'prop-types'

const GifExpertApp = () => {
    
    const [ categories , setCategories ] = useState( ['OPne Punch', 'Samurai X', 'Dragon Ball'] );
    
const handleAdd = ()=>{
    //setCategories( ['Hunter' , ...categories] );
    setCategories( (cats)=> [...categories , 'Hunter' ]  );    
}

    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr />
            <button onClick={ handleAdd }> Agregar </button>
            <ol>
                {
                    categories.map( (category) => {
                        return <li key={ category }> { category } </li>
                    })
                }
            </ol>
        </>
    )
}

// GifExpertApp.propTypes = {

// }

export {
    GifExpertApp
}

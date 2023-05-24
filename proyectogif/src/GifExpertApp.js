import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = ()=>{
    //     setCategories( ()=>[...categories , 'Otro Valor'] )
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr></hr>
            {/* <button onClick={ handleAdd } >Agregar</button> */}
            <ol>
                {
                    categories.map((category,i) => {
                        return <li key={i}> {category} </li>
                    })
                }
            </ol>
        </>
    )
}

//GifExpertApp.propTypes = {}

export {
    GifExpertApp
} 
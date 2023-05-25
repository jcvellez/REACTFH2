import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['roll']); //'One Punch', 'Samurai X', 'Dragon Ball'

    // const handleAdd = ()=>{
    //     setCategories( ()=>[...categories , 'Otro Valor'] )
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            {/* <button onClick={ handleAdd } >Agregar</button> */}
            <ol>
                {
                    categories.map( (category,i) => ( //oojo aqui si le pongo parentesis si devuelve el elemento
                        <GifGrid key={i} category={category} />)
                    )
                }
            </ol>
        </>
    )
}

//GifExpertApp.propTypes = {}

export {
    GifExpertApp
} 
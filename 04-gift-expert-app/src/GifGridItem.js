import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const GifGidItem = ({ id, name, url }) => { //aqui puedes usar props oaplicar destructuracion de elementos
    console.log({ id, name, url });
   
    

    return (
        <div className='card'>
            <img src={url} alt={name}></img>
            <p>{name}</p>
        </div>
    )
}

// GifGidItem.propTypes = {
// }

export default GifGidItem

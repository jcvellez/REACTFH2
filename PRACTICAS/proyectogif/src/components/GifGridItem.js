import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ( {img} ) => {
    

    return (
        <div className='animate__animated animate__fadeIn'>
            <img className='card' src={img.url} title={img.title} />
            <p className='card'>{img.title}</p>            
        </div>        
    )
}

//GifGridItem.propTypes = {}

export default GifGridItem
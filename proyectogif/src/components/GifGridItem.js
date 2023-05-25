import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ( {img} ) => {
    

    return (
        <div>
            <img src={img.url} title={img.title} />
            <p>{img.title}</p>            
        </div>        
    )
}

//GifGridItem.propTypes = {}

export default GifGridItem
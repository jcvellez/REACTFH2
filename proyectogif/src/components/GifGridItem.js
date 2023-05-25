import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = (img) => { return (
    <div>
        <li>{ img.title }</li>      
    </div>
  )
}

//GifGridItem.propTypes = {}

export default GifGridItem
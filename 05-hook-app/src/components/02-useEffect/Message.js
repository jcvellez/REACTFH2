import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Message = () => {
    useEffect(() => {
        console.log('componente montado'); //esto es lo que va hacer el componente

        return () => {
            console.log('componente DESmontado'); //esto es el desecho la , aqui se quita el efecto
        }
    }, []) //esta son las dependencias


    return (
        <h2>Eres genial!!</h2>
    )
}

//Message.propTypes = {}

export default Message

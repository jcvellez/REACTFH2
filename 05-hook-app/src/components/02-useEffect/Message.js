import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Message = () => {

    const [coords, setcoords] = useState({ x: 0, y: 0 });

    const mouseEvent = (e) => {
        const coors =
        {
            x: e.x,
            y: e.y
        }
        setcoords(coors)
        //console.log(coors);        
    };

    useEffect(() => {
        //console.log('componente montado'); //esto es lo que va hacer el componente
        window.addEventListener('mousemove', mouseEvent            
        );
        return () => {
            //console.log('componente DESmontado'); //esto es el desecho la , aqui se quita el efecto
            window.removeEventListener('mousemove', mouseEvent);
        }
    }, []) //esta son las dependencias

    const { x, y } = coords;
    
    return (
        <>
            <h2>Eres genial!!</h2>
            <p>x: {x} y: {y}</p>
        </>
    )
}

//Message.propTypes = {}

export default Message

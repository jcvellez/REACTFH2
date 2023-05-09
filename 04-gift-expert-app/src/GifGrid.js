import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'


const GifGrid = ({ category }) => {

    const [images, setimages] = useState([])
    useEffect(() => {
        getGifs();
    }, []); //[] los corchetes son para indicar q no tiene ninguna dependencia por eso no te renderiza todo de nuevo.

    const getGifs = async () => {
        let poke = 'pikachu'
        const url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
        const respuesta = await fetch(url);
        //const {id} = await respuesta.json();
        //const { name } = await respuesta.json();
        const { sprites } = await respuesta.json();
        const resp =  sprites.other.home;
        //const resp = respuesta;
        console.log(resp);
    }



    return (
        <>
            <h3>{category}</h3>
            <ol>
                <li>item</li>
            </ol>
        </>
    )
}

GifGrid.propTypes = {

}

export default GifGrid
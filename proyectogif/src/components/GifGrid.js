import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []) //es un arrglo de dependecias, como se lo mandamos vacio, se ejecutara una sola vez.


    const getGifs = async () => {
        let category = 'run'
        const uri = `https://api.otakugifs.xyz/gif?reaction=${category}`;
        const respuesta = await fetch(uri);
        //const data = await respuesta.json();
        const { url } = await respuesta.json();

        let gifs = [{
            id: 1,
            title: 'category ' + category,
            url: url
        }];


        console.log(gifs);
        setImages(gifs);
    }

    // let obj = {
    //     id : 1,
    //     name : url
    // }           


    //getGifs();
    return (
        <>
            <h3>{category}</h3>
            <ol>
                {
                    images.map((img) => (
                        //< GifGridItem  key={img.id} img={img} />
                        //<li key={img.id}> {img.title} </li>
                        < GifGridItem key={img.id} img={img} />
                    ))
                }
            </ol>
        </>
    )
}

//GifGrid.propTypes = {}

export default GifGrid
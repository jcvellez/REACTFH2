import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { getGifs } from './helpers/getGifs';

const GifGrid = ({ category }) => {

    let [images, setimages] = useState([])

    useEffect(() => {
        getGifs().then( (imgs)=>setimages(imgs) );
    }, []); //[] los corchetes son para indicar q no tiene ninguna dependencia por eso no te renderiza todo de nuevo.

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                <ol>
                    {
                        images.map((item) => (
                            <GifGridItem key={item.id} {...item} />
                            //<GifGridItem key={ item.id } item={ item } />
                        ))
                    }

                    {/* {
                    images.map( (item)=> <li key={ item.id }>{ item.name }</li> )
                }                 */}
                </ol>
            </div>
        </>
    )
}

GifGrid.propTypes = {

}

export default GifGrid

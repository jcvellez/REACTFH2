import React/*, { useState, useEffect }*/ from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import { useFetchGIfs } from './hooks/useFetchGIfs';
//import { getGifs } from './helpers/getGifs';

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGIfs( category );
    console.log(images);
    // useEffect(() => {
    //     getGifs( category )
    //     .then( imgs=>{ setImages(imgs) } ); //.then( setImages );
    // }, [ category ]) //es un arrglo de dependecias, como se lo mandamos vacio, se ejecutara una sola vez.


    // let obj = {
    //     id : 1,
    //     name : url
    // }           


    //getGifs();
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {/* {loading ? 'Cargando...' : 'Data cargada'} */}
            { loading && <p className='animate__animated animate__flash'>Loading</p> }
            <div className='.card-grid'>
                <ol>
                    {
                        images.map((img) => (
                            //< GifGridItem  key={img.id} img={img} />
                            //<li key={img.id}> {img.title} </li>
                            < GifGridItem key={img.id} img={img} />
                        ))
                    }
                </ol>
            </div>
        </>
    )
}

//GifGrid.propTypes = {}

export default GifGrid
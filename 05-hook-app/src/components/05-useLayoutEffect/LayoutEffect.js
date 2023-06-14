import React, { useLayoutEffect, useRef, useState } from 'react'
import './layout.css'
import useFetch from '../../hooks/useFetch'
import useCounter from '../01-useState/useCounter'

const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { quote, author } = !!data && data[data.length - 1];

    const pTag = useRef();
const [boxSize, setBoxSize] = useState({});
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());

    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr></hr>

            <blockquote className='blockquote text-right'>
                <p className='mb-0' ref={pTag} > {quote} </p>
                <br></br>
                <footer className='blockquote-footer'> {author} </footer>
            </blockquote>
            <pre>
                {JSON.stringify( boxSize , null , 3 )}
            </pre>


            <button className='bnt btn-primary' onClick={increment} >
                Siguiente quote
            </button>
        </div>
    )
}

export default Layout
import React, { useMemo, useState} from 'react'
import PropTypes from 'prop-types'
import useCounter from '../01-useState/useCounter'
import { procesoPesado } from '../../helpers/procesoPesado';
import { Small } from './Small';

const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true)
    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]) //osea si el counter cambia, nencesito una nueva version memoizada de esa funcion.

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: {counter} </h3>
            <hr></hr>          
            <p> { memoProcesoPesado } </p>
            <button className='btn btn-success' onClick={increment}>
                +1
            </button>
            <button className='btn btn-outline-primary ml-3' onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}

//Memorize.propTypes = {}

export default MemoHook
import React, { useCallback, useState } from 'react'
//import '../02-useEffect/effects.css'

export const CallBackHook = ({ productId, referrer, theme }) => {

    const [counter, setCounter] = useState(10)

    const handleSubmit = useCallback(
        () => {
            setCounter(counter + 2)
        },
        [console.log('Dependencia de callback')],
    )


    return (
        <>
            <h1>useCallBack Hook</h1>
            <hr></hr>
            <h3>{counter}</h3>
            <button className='btn btn-primary' onClick={handleSubmit}>Prueba</button>
        </>
    )
}

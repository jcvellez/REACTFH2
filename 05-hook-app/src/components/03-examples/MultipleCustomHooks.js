import React from 'react'
import '../02-useEffect/effects.css'
import useFetch from '../../hooks/useFetch'

const MultipleCustomHooks = () => {

const state = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/1`);
console.log(state);

  return (
    <div>
      <h1>
        Custom Hooks!!!!
      </h1>
    </div>
  )
}

export default MultipleCustomHooks
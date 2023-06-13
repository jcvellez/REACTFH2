import React from 'react'
import '../02-useEffect/effects.css'
import useFetch from '../../hooks/useFetch'
import useCounter from '../01-useState/useCounter'

const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  const { quote, author } = !!data && data[data.length - 1];
  console.log(loading);
  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr></hr>
      {
        loading ? (
          <div className='alert alert-info text-center'>
            Loading...
          </div>
        )
          : (
            <blockquote className='blockquote text-right'>
              <p className='mb-0'> {quote} </p>
              <br></br>
              <footer className='blockquote-footer'> {author} </footer>
            </blockquote>
          )
      }
      <button className='bnt btn-primary' onClick={increment} >
        Siguiente quote
      </button>
    </div>
  )
}

export default MultipleCustomHooks
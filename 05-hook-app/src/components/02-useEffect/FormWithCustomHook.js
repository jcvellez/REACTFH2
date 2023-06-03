import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './effects.css';
import Message from './Message';
import useForm from '../../hooks/useForm'

const FormWithCustomHook = () => {

  const [values, handleInputChange] = useForm(
    {
      name: '',
      email: '',
      password: ''
    }
  );

  const { name, email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr></hr>
      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>


      <div className='form-group'>
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='tu email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>


      <div className='form-group'>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='*******'
          autoComplete='off'
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSubmit} className='btn btn-success'>Aceptar</button>
      {/* {name === '123' && <Message />} */}
    </form>
  )
}

//SimpleForm.propTypes = {}

export default FormWithCustomHook
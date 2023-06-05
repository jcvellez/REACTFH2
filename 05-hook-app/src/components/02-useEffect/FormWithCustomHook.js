import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './effects.css';
import Message from './Message';

const FormWithCustomHook = () => {
  const [formState, setformState] = useState(
    {
      name: '',
      email: ''
    }
  );

  const { name, email } = formState;

   const handleInputChange = ({ target }) => { //aqui desestructuro la e y saco el target solamente. Originalmente es asi => e.target.value
    setformState(
      {
        ...formState,
        [target.name]: target.value
      }
    );
  }

  return (
    <>
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
    </>
  )
}

//SimpleForm.propTypes = {}

export default FormWithCustomHook
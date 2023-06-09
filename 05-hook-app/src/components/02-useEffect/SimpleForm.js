import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './effects.css';
import Message from './Message';
import useForm from './useForm';
import FormWithCustomHook from './FormWithCustomHook';

const SimpleForm = () => {
  const [formState, setformState] = useState(
    {
      name: '',
      email: ''
    }
  );

  const { name, email } = formState;

  useEffect(() => {
    console.log('hey!!');
  }, []
  );

  useEffect(() => {
    console.log('formState Cambio');
  }, [formState]); //Ok m detectas el formState

  useEffect(() => {
    console.log('email cambio');
  }, [email]); //Ok m detectas el email

  // const handleInputChange = ({ target }) => { //aqui desestructuro la e y saco el target solamente. Originalmente es asi => e.target.value
  //   setformState(
  //     {
  //       ...formState,
  //       [target.name]: target.value
  //     }
  //   );
  // }

  // return (
  //   <>
  //     <h1>useEffect</h1>
  //     <hr></hr>
  //     <div className='form-group'>
  //       <input
  //         type='text'
  //         name='name'
  //         className='form-control'
  //         placeholder='tu nombre'
  //         autoComplete='off'
  //         value={name}
  //         onChange={handleInputChange}
  //       />
  //     </div>


  //     <div className='form-group'>
  //       <input
  //         type='text'
  //         name='email'
  //         className='form-control'
  //         placeholder='tu email'
  //         autoComplete='off'
  //         value={email}
  //         onChange={handleInputChange}
  //       />
  //     </div>

  //     {name === '123' && <Message />}
  //   </>

  //)
  return (
    <>
      < FormWithCustomHook />
      {/* {name === '123' && <Message />} */}
    </>
  )
}

//SimpleForm.propTypes = {}

export default SimpleForm
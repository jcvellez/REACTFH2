import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { UserContext } from './UserContext';

const LoginScreen = () => {

  const { setUser } = useContext(UserContext);

  const obj = {
    id: 123,
    name: 'Juan Carlos'
  }
  
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr></hr>
      <button className='btn btn-primary' onClick={() => setUser(obj)}>
        Login
      </button>
    </div>
  )
}

// LoginScreen.propTypes = {

// }

export default LoginScreen

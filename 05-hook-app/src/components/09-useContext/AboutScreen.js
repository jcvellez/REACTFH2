import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { UserContext } from './UserContext'

const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleClick=()=>{
    setUser({});
  }
  return (
    <div>
      <h1>AboutScreen</h1>
      <hr></hr>
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
      <button className='btn btn-danger' onClick={handleClick}>
        Logout
      </button>
    </div>
  )
}

// AboutScree.propTypes = {

// }

export default AboutScreen

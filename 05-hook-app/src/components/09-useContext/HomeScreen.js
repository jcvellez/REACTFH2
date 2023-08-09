import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { UserContext } from './UserContext';

const HomeScreen = () => {

const userContext= useContext(UserContext);
console.log(userContext);
  return (
    <div>
      <h1>HomeScreen</h1>
      <hr></hr>
    </div>
  )
}

// HomeScreen.propTypes = {

// }

export default HomeScreen

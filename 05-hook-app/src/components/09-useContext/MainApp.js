import React from 'react'
import PropTypes from 'prop-types'
import AppRouter from './AppRouter'
import { UserContext } from './UserContext'



const MainApp = () => {

    const user = {
        id: '1234',
        name: 'Juank',
        email: 'jcvellez@live.com'
    }

    return (
        <UserContext.Provider value={ user }>
            <AppRouter />
        </UserContext.Provider>
    )
}

// MainApp.propTypes = {

// }

export default MainApp

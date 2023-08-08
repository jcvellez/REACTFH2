import React from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes
} from "react-router-dom";
import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const AppRouter = () => {
    return (
        // <div>AppRouter</div>
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" Component={HomeScreen} />
                    <Route exact path="/about" Component={AboutScreen} />
                    <Route exact path="/login" Component={LoginScreen} />
                </Routes>
            </div>
        </Router>
        // <div>AppRouter</div>
    )
}

// AppRouter.propTypes = {}

export default AppRouter
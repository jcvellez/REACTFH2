import React from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import NavBar from './NavBar';

const AppRouter = () => {
    return (
        // <div>AppRouter</div>
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route exact path="/" Component={HomeScreen} />
                    <Route exact path="/about" Component={AboutScreen} />
                    <Route exact path="/login" Component={LoginScreen} />
                    <Route Component={<Navigate replace to="/" />} />
                </Routes>
            </div>
        </Router>
        // <div>AppRouter</div>
    )
}

// AppRouter.propTypes = {}

export default AppRouter
import React from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AboutScreen from './AboutScreen';

const AppRouter = () => {
    return (
        // <div>AppRouter</div>
        <Router>
            <div>
                <Switch>
                    <Route path='/about' component={AboutScreen} />
                </Switch>
            </div>
        </Router>
    )
}

// AppRouter.propTypes = {}

export default AppRouter
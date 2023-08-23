import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Navbar } from '../ui/Navbar'; 
import { LoginScreen } from '../login/LoginScreen';
import { Marvel } from '../marvel/Marvel';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                
                <Switch>
                    <Route exact path="/login" Component={ LoginScreen }/>
                    <Route exact path="/" Component={ Marvel }/>
                </Switch>
            </div>
        </Router>
    )
}

import { Routes ,Route } from 'react-router-dom';
import React from 'react'
import {
    BrowserRouter as Router
    
} from "react-router-dom";
import { Navbar } from '../ui/Navbar'; 
import { LoginScreen } from '../login/LoginScreen';
import { Marvel } from '../marvel/Marvel';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                
                <Routes>
                    <Route  path="/login" element={ LoginScreen }/>
                    <Route  path="/" element={ Marvel }/>
                </Routes>
            </div>
        </Router>
    )
}

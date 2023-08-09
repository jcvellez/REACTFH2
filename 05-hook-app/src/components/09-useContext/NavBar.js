import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">useContext</a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className="nav-link" href="#">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link" href="#">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// NavBar.propTypes = {

// }

export default NavBar

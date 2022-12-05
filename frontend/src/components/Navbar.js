import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
class Navbar extends Component {
    render() {
        return (
            <header>
                <div className="containerNav">
                    <div className="logoNavItem">
                        <img src="./logo.svg" alt="logo" />
                    </div>
                    <Link to='/'>
                        <div className="navitem">
                            <h2>Home</h2>
                        </div>
                    </Link>
                    <Link to='/nextMatches'>
                        <div className="navitem">
                            <h2>Next Matches</h2>
                        </div>
                    </Link>
                    <Link to='/login'>
                        <div className="navitem">
                            <h2>Login</h2>
                        </div>
                    </Link>
                    <Link to='/signup'>
                        <div className="navitem">
                            <h2>Signup</h2>
                        </div>
                    </Link>
                </div>
            </header>
        );
    }
}

export default Navbar;
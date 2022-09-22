import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <header>
                <div className="containerNav">
                    <Link to='/'>
                        <div className="navitem">
                            <h2>Home</h2>
                        </div>
                    </Link>
                    <Link to='/login'>
                        <div className="navitem">
                            <h2>Login</h2>
                        </div>
                    </Link>
                </div>
            </header>
        );
    }
}

export default Navbar;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <Link to='/'>
                        <h2>Home</h2>
                    </Link>
                </div>
            </header>
        );
    }
}

export default Navbar;

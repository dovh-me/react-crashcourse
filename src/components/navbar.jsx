import React from 'react';

const Navbar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="test">
                    Navbar
                    <span className="badge bg-danger m-2">{totalCounters}</span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
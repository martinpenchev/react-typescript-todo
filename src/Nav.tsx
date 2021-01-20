import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component<any> {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">TO DO</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link to="/all" className="nav-link" aria-current="page">My Items</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/new" className="nav-link">New Item</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;
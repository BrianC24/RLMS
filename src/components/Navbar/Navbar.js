import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo-no-back.jpeg';

const Navbar = (props) => {
    return (
        <nav className="nav">
            <div className="nav-items">
                <Link className="logo-item" to="/"><img className="logo-nav" src={logo} alt=""/></Link>
                <Link className="item" to="/lessons">Lessons</Link>
                <Link className="item" to="/labs">Labs</Link>
                <Link className="item" to="/concepts">Concpets</Link>
                <Link className="item" to="/career">Career</Link>
            </div>
        </nav>
    );
}

export default Navbar;
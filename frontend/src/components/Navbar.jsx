import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <h1 className="navbar-brand">Nat Cabrera</h1>

            <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            <ul className={isOpen ? "navbar-links open" : "navbar-links"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/dashboards">Dashboards</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
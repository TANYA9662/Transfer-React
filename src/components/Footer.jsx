import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li><Link to="/kundservice">Kundservice</Link></li>
                    <li><Link to="/vanliga-fragor">Vanliga frågor</Link></li>
                    <li><Link to="/villkor">Villkor</Link></li>
                    <li><Link to="/bli-medlem">Bli medlem</Link></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;




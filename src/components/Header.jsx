import React from 'react';
import { Link } from 'react-router-dom';


///Styles ////
import '../styles/components/Header.css'

export default function Header() {
    return (
        <div className="Header">
            <Link to="/">
            <h1>PlatziConf Merch</h1>
            </Link>
            <div className="Header-checkout">
                <Link to="/checkout">
                <i className="fas fa-cart-arrow-down"></i>
                </Link>
            </div>
        </div>
    )
}

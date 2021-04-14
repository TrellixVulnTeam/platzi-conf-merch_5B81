import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';


///Styles ////
import '../styles/components/Header.css'

export default function Header() {
    const {state} = useContext (AppContext);

    const {cart} = state;

    return (
        <div className="Header">
            <Link to="/">
            <h1>PlatziConf Merch</h1>
            </Link>
            <div className="Header-checkout">
                <Link to="/checkout">
                <i className="fas fa-cart-arrow-down"></i>
                </Link>
                {cart.length > 0 && <div className="Header-alert"> {cart.length} </div>}
            </div>
        </div>
    )
}

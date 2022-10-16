import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>

            <img src={logo} alt="" />
            <div className='link'>
                <Link to='/shop'>Shop</Link>
                <Link to='/order'>Order</Link>
                <Link to='/orderReview'>Order Review</Link>
                <Link to='/manageInventory'>Manage Inventory</Link>
                <Link to='/login'>Login</Link>
                {/* <a href="./order">Order</a>
                <a href="./order review">Order Review</a>
                <a href="./manage inventory">Manage Inventory</a>
                <a href="./login">Login</a> */}
            </div>

        </nav>
    );
};

export default Header;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Order = () => {
    const { products, previousCart } = useLoaderData();
    const [cart, setCart] = useState(previousCart);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const handleDelete = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    return (
        <div className='shop'>
            <div className="order-container">
                {
                    cart.map(product => <ReviewItem handleDelete={handleDelete} key={product.id} product={product}></ReviewItem>)
                }
            </div>
            <div className="cart-container cart">
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;
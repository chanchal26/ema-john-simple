import React from 'react';
import './Cart.css'

const Cart = ({ cart, clearCart }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = total * 0.1;

    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Selected Item :{quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : ${shipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h3>Grand Total : ${total + shipping + tax}</h3>
            <div className='btn'>
                <button onClick={clearCart} className='btn-1'>Clear Cart</button><br />
                <button className='btn-2'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;
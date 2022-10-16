import React from 'react';
import './ReviewItem.css'
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({ product, handleDelete }) => {
    const { id, name, price, quantity, img, shipping } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='info'>
                    <h4>{name}</h4>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='btn'>
                    <button className='btn0' onClick={() => handleDelete(id)}><TrashIcon className="h-6 w-6 text-blue-500" /></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings} Star</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;
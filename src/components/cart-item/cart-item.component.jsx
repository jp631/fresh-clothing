import React from 'react';

import './cart-item.styles.scss'

const CartItem = (props) => {
    return(
    <div className='cart-item'>
        {    console.log(`cartitem: ${props.cartItem}`)}
        <img src={props.cartItem.imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>${props.cartItem.name}</span>
            <span className='price'>{props.cartItem.quantity} x ${props.cartItem.price}</span>

        </div>
    </div>
    )}
export default CartItem;
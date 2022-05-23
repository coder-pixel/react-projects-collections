import React, { useContext, useState } from 'react'
import { CartContext } from './Context/CartContext'

const CartItem = ({ product }) => {
    const { id, title, price, img, quantity } = product

    const { incrementItem, decrementItem, removeProduct } = useContext(CartContext);
    return (
        quantity > 0 ?
            (
                <div className='cartItem'>
                    <div className="cartItem_img">
                        <img src={img} alt={title} />
                    </div>
                    <div className="cartItem_text">
                        <h3>{title}</h3>
                        <p>${price}</p>
                        <button className="itemRm_btn" onClick={() => removeProduct(id)}>Remove</button>
                    </div>
                    <div className="cartItem_amount">
                        <span onClick={() => incrementItem(id)}>+</span>
                        <p>{quantity}</p>
                        <span onClick={() => decrementItem(id)}>-</span>
                    </div>
                </div>
            )
            :
            (
                null
            )
    )
}

export default CartItem
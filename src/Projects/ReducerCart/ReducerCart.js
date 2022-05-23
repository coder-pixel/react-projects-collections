import React, { useContext } from 'react'
import "./ReducerCart.css"
import CartItem from './CartItem'
import { CartContext } from './Context/CartContext'

// console.log(data)

const ReducerCart = () => {
    const { products, totalItems, clearCart, totalAmount } = useContext(CartContext);
    console.log(products)

    // const [cartItems, setcartItems] = useState(products)

    return (
        <div className='reducerCart'>
            <div className="cart_header">
                <h2>Your Bag</h2>
                <p>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"></path></svg>
                        <span className='cartSVGAmount'>{totalItems}</span>
                    </span>
                </p>
            </div>


            {products.length > 0 ?
                (
                    <div className="cart_content">
                        {products.map(product => <CartItem key={product.id} product={product} />)}
                    </div>
                )
                :
                (
                    <div className="cart_content_empty">
                        <h3><span>Oops!</span> nothing to show here...</h3>
                    </div>
                )
            }


            <div className="cart_total">
                Total: <span>${totalAmount}</span>
            </div>

            <div className="cart_clear">
                <button onClick={() => clearCart()}>Clear Cart</button>
            </div>
        </div>
    )
}

export default ReducerCart
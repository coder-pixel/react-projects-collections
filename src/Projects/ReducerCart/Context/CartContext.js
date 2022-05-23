import React, { createContext, useReducer } from 'react'
import { products } from "../data"
import { cartReducer } from './cartReducer';
// console.log(products)

export const CartContext = createContext();   // creating the context

const initialState = {
    products: products,
    totalItems: products.map(product => product.quantity).reduce((accumulator,currValue) => accumulator + currValue, 0),
    totalAmount: products.map(product => product.price * product.quantity).reduce((accumulator,currValue) => accumulator + currValue, 0)
}
// console.log(initialState.products)

const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    
    // actions
    const incrementItem = (id) => {
        return dispatch({ type: "INCREMENT_ITEM", payload: id })
    }

    const decrementItem = (id) => {
        return dispatch({ type: "DECREMENT_ITEM", payload: id })
    }

    const clearCart = () => {
        return dispatch({ type: "CLEAR"})
    }

    const removeProduct = (id) => {
        return dispatch({ type: "REMOVE_PRODUCT", payload: id})
    }



  return (
    <CartContext.Provider value={{
        products: state.products,
        totalItems: state.totalItems,
        totalAmount: state.totalAmount,
        incrementItem,
        decrementItem,
        clearCart,
        removeProduct
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
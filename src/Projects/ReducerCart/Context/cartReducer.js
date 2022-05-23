export const cartReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT_ITEM":
            console.log("INCREMENT_ITEM")
            const incre_product = state.products.map(product => {
                if (product.id == action.payload) {
                    // console.log(product.id)
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }
                return product
            })

            return {
                ...state,
                products: incre_product,
                totalItems: state.totalItems + 1,
                totalAmount: incre_product.map(product => product.price * product.quantity).reduce((accumulator,currValue) => accumulator + currValue, 0)
            }

        case "DECREMENT_ITEM":
            console.log("DECREMENT_ITEM")
            const decre_product = state.products.map(product => {
                if (product.id == action.payload) {
                    // console.log(product.id)
                    if (product.quantity > 0) {
                        return {
                            ...product,
                            quantity: product.quantity - 1
                        }
                    }
                }
                return product
            })
            return {
                ...state,
                products: decre_product,
                totalItems: state.totalItems - 1,
                totalAmount: decre_product.map(product => product.price * product.quantity).reduce((accumulator,currValue) => accumulator + currValue, 0)
            }

        case "CLEAR":
            console.log("clear")
            return {
                ...state,
                products: [],
                totalItems: 0
            }

        case "REMOVE_PRODUCT":
            const newProductsArr =  state.products.filter(product => product.id !== action.payload)
            return{
                ...state,
                products: newProductsArr,
                totalItems: newProductsArr.map(product => product.quantity).reduce((accumulator, curr_value) => accumulator + curr_value, 0),
                totalAmount: newProductsArr.map(product => product.quantity * product.price).reduce((accumulator, curr_value) => accumulator + curr_value, 0),
            }

        default:
            return state
    }
}
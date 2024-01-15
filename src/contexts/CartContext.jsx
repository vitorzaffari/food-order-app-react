import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (item) => { }
})

function cartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        const itemIndex = state.items.findIndex(item => item.id === action.item.id)

        const updatedItems = [...state.items];

        const existingItem = state.items[itemIndex]

        if (itemIndex > -1) {
            const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 }

            updatedItems[itemIndex] = updatedItem;
        }
        else {
            updatedItems.push({ ...action.item, quantity: 1 })
        }
        return { ...state, items: updatedItems }
    }
    if (action.type === "REMOVE_ITEM") {

        const itemIndex = state.items.findIndex(item => item.id === action.id)

        const updatedItems = [...state.items];

        const existingItem = state.items[itemIndex]

        if (existingItem.quantity > 1) {
            const updatedItem = {
                ...existingItem, quantity:
                    existingItem.quantity - 1
            }
            updatedItems[itemIndex] = updatedItem;
        }
        else {
            updatedItems.splice(itemIndex, 1);
        }

        return { ...state, items: updatedItems }
    }

    return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, { items: [] })

    function addItem(item) {
        dispatch({ type: 'ADD_ITEM', item })
    }

    function removeItem(id) {
        dispatch({ type: 'REMOVE_ITEM', id })
    }



    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    }

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext;
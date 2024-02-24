import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

/* export function CartContextProvider({ children }) {
    const useReducer()
} */

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // copy the array to avoid directly mutating the original state
    const updatedItems = [...state.items];
    // Update the quantity of existing item or add new
    if (existingCartItemIndex > -1) {
      existingItem = state.items[existingCartItemIndex];
      updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
  }
  //  returns a new state object where the items array is updated
  return { ...state, items: updatedItems };
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  const cartContext = {
    items: cart.items,
    addItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
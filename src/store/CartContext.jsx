import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItems: (item) => {},
  removeItems: (id) => {},
});

function cartReducer(state,action){
  if(action.type == 'ADD_ITEM'){
    const existingCartItemIndex = state.items.findIndex((items)=> items.id == action.item.id)
    const updatedItems = [ ...state.items]
    if(existingCartItemIndex > -1){
      const existingItem = state.items[existingCartItemIndex]
      const updatedItem = {
        ...existingItem,
        quantity:existingItem.quantity + 1
      }
      updatedItems[existingCartItemIndex]= updatedItem
    }else{
      updatedItems.push({...action.item,quantity:1})
    }
    return {...state , items:updatedItems}
  }else if(action.type == 'REMOVE_ITEM'){
    const existingCartItemIndex = state.items.findIndex((items)=> items.id == action.id)
    const existingCartItem = state.items[existingCartItemIndex]
    if(existingCartItem.quantity == 1){
      const updatedItem = [...state.items]
      updatedItem.splice(existingCartItemIndex,1)
    }else{
      const updatedItem = {
        ...existingCartItem,
        quantity:existingCartItem.quantity -1
      }
    } 
    return {...state , item:updatedItems}
  }
  return state
}

export function CartContextProvider({children}) {
   const [cart ,dispatchCartAction ]= useReducer(cartReducer , {items:[]})
   function addItems(item) {
     dispatchCartAction({
       type: 'ADD_ITEM',
       item
      })
    }
    function removeItems(id) {
      dispatchCartAction({
        type: 'REMOVE_ITEM',
        id
      })
    }
    const cartContext ={
     items: cart.items,
     addItems,
     removeItems
   }
   console.log(cartContext);
   
  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContext
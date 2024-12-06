import { createContext, useState } from "react";
const userProgressContext = createContext({
    progress: '',
    showCart: ()=>{},
    hideCart: ()=>{},
    showCheckout: ()=>{},
    hideCheckout:()=>{}
})


export function UserCOntextProvider({children}){
    const [userProgress,setUserProgress] =useState('')
    function showCart(){
        setUserProgress('cart')
    }
    function hideCart(){
        setUserProgress('')
    }
    function showCheckout(){
        setUserProgress('checkout')
    }
    function hideCheckout(){
        setUserProgress('')
    }
    const userCOntext = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
    }
    return <userProgressContext.Provider value={userCOntext}>{children}</userProgressContext.Provider>
}
export default userProgressContext
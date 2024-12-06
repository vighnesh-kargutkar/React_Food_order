import { useContext } from "react";
import image from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import userProgressContext from "../store/UserProgressContext";
export default function Header() {
  const cartCxt = useContext(CartContext)
  const userCxt = useContext(userProgressContext)
  const total = cartCxt.items.reduce((totalno, item)=>{
    return totalno+ item.quantity
  },0)
  function handleShowcart(){
    
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={image} alt="" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textOnly onCLick={handleShowcart}> Cart ({total})</Button>
      </nav>
    </header>
  );
}

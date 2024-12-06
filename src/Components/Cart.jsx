import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormater } from "../util/format";
import Button from "./UI/Button";

export default function Cart(){
    const cartCtx = useContext(CartContext)
    const total = cartCtx.items.reduce((totalno, item)=>{
        return totalno+ item.quantity * item.price
      },0)
    return(
        <Modal className="cart">
            <h2>Ypur cart</h2>
            <ul>
                {cartCtx.map((item)=> <li key={item.id}>
                    {item.name} - {item.quantity}
                </li>)}
            </ul>
            <p className="cart-toal">{currencyFormater.format(total)}</p>
            <p className="modal-actions">
                <Button textOnly>Close</Button>
                <Button>Go to Checkout</Button>
            </p>
        </Modal>
    )
}
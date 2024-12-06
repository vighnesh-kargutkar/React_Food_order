import { useCallback, useContext } from "react";
import { currencyFormater } from "../util/format";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext)
  function addMealToCArt(){
    cartCtx.addItems(meal)
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          {/* <p className="meal-item-price">&#x20B9;{meal.price}</p> */}
          <p className="meal-item-price">
            {currencyFormater.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal.item.action">
          <Button onClick={addMealToCArt  }> Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}

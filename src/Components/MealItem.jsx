import { currencyFormater } from "../util/format";
import Button from "./UI/Button";

export default function MealItem({ meal }) {
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
          <Button> Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}

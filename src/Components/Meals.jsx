import { useEffect, useState } from "react";
import axios from "axios";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get("http://localhost:3000/meals");
        setLoadedMeals(result.data);
        console.log(result.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.message);
        }
      }
    })();
  }, []);
  return (
    <ul id="meals">
      {loadedMeals.map((meals) => (
        <MealItem key={meals.id} meal={meals} />
      ))}
    </ul>
  );
}

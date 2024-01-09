import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  console.log(resInfo);

  const data = resInfo[0]?.card?.card?.info;
  const menu =
    resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  return data == undefined ? (
    <Shimmer />
  ) : (
    <div className="mx-8 my-2">
      <h1 className="text-3xl font-medium">{data.name}</h1>
      <h3>
        {data.cuisines.join(", ")} - {"Rs. "} {data.costForTwoMessage}{" "}
      </h3>

      <h2 className="text-xl font-semibold">Menu</h2>
      <ul className="list-disc ml-4">
        {menu.map((el) => {
          return <li key={el.card.info.id}>{el.card.info.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

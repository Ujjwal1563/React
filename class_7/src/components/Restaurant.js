import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Restaurant = () => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.9486406&lng=77.6435896&restaurantId=895431&catalog_qa=undefined&query=Pizza&submitAction=ENTER"
    );
    const json = await response.json();
    setResData(json.data);
  };

  if (!resData) return <Shimmer />;

  const itemCards =
    resData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{resData?.cards?.[2]?.card?.card?.info?.name}</h1>
      <h2>{resData?.cards?.[2]?.card?.card?.info?.city}</h2>
      <h3>Menu</h3>
      <ul>
        {itemCards?.map((item, index) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;

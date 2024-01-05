import React from "react";
import "./index.css";
import { data } from "./constants.js";
import RestaurantCard from "./components/RestaurantCard.jsx";
import Header from "./components/Header.jsx";

function createCards({
  info: {
    name,
    id,
    cloudinaryImageId,
    deliveryTime,
    avgRatingString,
    costForTwo,
  },
}) {
  return (
    <RestaurantCard
      key={id}
      name={name}
      imageId={cloudinaryImageId}
      deliveryTime={deliveryTime}
      avgRating={avgRatingString}
      cost={costForTwo}
    />
  );
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className="mx-1 my-2 border p-2 grid grid-cols-6 gap-4">
        {data.map((el) => createCards(el))}
      </div>
    </div>
  );
};

export default AppLayout;

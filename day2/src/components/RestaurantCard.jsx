const RestaurantCard = ({ name, imageId, deliveryTime, avgRating, cost }) => {
  return (
    <div className="res-cart border-2 m-2 border-slate-900 hover:cursor-pointer w-fit">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/" +
          imageId
        }
        alt="food_image"
        width={240}
      />
      <div className="px-4 pt-1">
        <h3>{name}</h3>
        <h4>Biryani, North Indian, Asian</h4>
        <h4 className="text-green-900">{avgRating}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

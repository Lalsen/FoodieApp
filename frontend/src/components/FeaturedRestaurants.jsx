import burgerHouse from "../assets/burger-house.jpg";
import sushiPalace from "../assets/sushi-palace.jpg";
import pizzaHaven from "../assets/pizza-haven.jpg";

const restaurants = [
  { id: 1, name: "The Burger House", img: burgerHouse },
  { id: 2, name: "Sushi Palace", img: sushiPalace },
  { id: 3, name: "Pizza Haven", img: pizzaHaven },
];

export default function FeaturedRestaurants() {
  return (
    <div className="restaurants">
      {restaurants.map((res) => (
        <div key={res.id} className="restaurant-card">
          <img src={res.img} alt={res.name} />
          <h3>{res.name}</h3>
        </div>
      ))}
    </div>
  );
}

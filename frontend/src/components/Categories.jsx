import deliveryImg from "../assets/delivery.png";
import diningImg from "../assets/dining.png";
import nightlifeImg from "../assets/nightlife.png";

const categories = [
  { name: "Delivery", img: deliveryImg },
  { name: "Dining", img: diningImg },
  { name: "Nightlife", img: nightlifeImg },
];

export default function Categories() {
  return (
    <div className="categories">
      {categories.map((cat, index) => (
        <div key={index} className="category">
          <img src={cat.img} alt={cat.name} className="category-img" />
          <h2>{cat.name}</h2>
        </div>
      ))}
    </div>
  );
}

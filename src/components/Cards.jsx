import Card from "./Card";
import './Cards.css'; 
import BlueSwang from "../assets/BlueSwang.png";
import BronceSwang from "../assets/BronceSwang.png";
import GoldSwang from "../assets/GoldSwang.png";
import GreySwang from "../assets/GreySwang.png";
import TernoSwang from "../assets/TernoSwang.png";
import WhiteSwang from "../assets/WhiteSwang.png";

const cards = [
  {
    id: 1,
    title: "Blue Swang",
    image: BlueSwang,
    price: 100,
  },

  {
    id: 2,
    title: "Bronce Swang",
    image: BronceSwang,
    price: 120,
  },

  {
    id: 3,
    title: "Gold Swang",
    image: GoldSwang,
    price: 200,
  },

  {
    id: 4,
    title: "Grey Swang",
    image: GreySwang,
    price: 300,
  },

  {
    id: 5,
    title: "Ternosolar Swang",
    image: TernoSwang,
    price: 400,
  },

  {
    id: 6,
    title: "White Swang",
    image: WhiteSwang,
    price: 500,
  },
];

function Cards() {
  return (
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-sm-1 col-md-4 p-3" key={index}>
            <Card
              title={card.title}
              imageSource={card.image}
              price={card.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
import {  useEffect, useState } from "react";
import "./Home.scss";

import axios from "axios";
import { Link } from "react-router-dom";
import { useShopContext } from "../../components/header/ShopProvider";

const range1 = "./assets/img/range1.png";
const range2 = "./assets/img/range2.png";
const range3 = "./assets/img/range3.png";
const share = "./assets/img/share.png";
const compare = "./assets/img/compare.png";
const heart = "./assets/img/heart1.png";
const bed1 = "./assets/img/bed1.png";
const bed2 = "./assets/img/bed2.png";

const Home = () => {

  const {addToCart}=useShopContext();
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const res = await axios.get("http://localhost:3000/cards");
      const data = await res.data;

      setCards(data);
    } catch (error) {
      console.log("Error occurred while fetching products:", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="home">
      <section className="new">
        <div className="container">
          <div className="new_content">
            <div className="new_card">
              <h1>New Arrival</h1>
              <span>Discover Our New Collection</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <button>BUY Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="range">
        <div className="container">
          <div className="range_head">
            <h1>Browse The Range</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="range_cards">
            <div className="range_card">
              <img src={range1} alt="Dining" />
              <span>Dining</span>
            </div>
            <div className="range_card">
              <img src={range2} alt="Living" />
              <span>Living</span>
            </div>
            <div className="range_card">
              <img src={range3} alt="Bedroom" />
              <span>Bedroom</span>
            </div>
          </div>
        </div>
      </section>
      <section className="products">
        <div className="container">
          <div className="pro_head">
            <h1>Our Products</h1>
          </div>
          <div className="pro_cards ">
            <div className="row">
              {cards.length > 0 &&
                cards.map((card, i) => (
                  <div className="pro_card" key={i}>
                    <h3>{card.circle}</h3>
                    <img src={card.image} alt={card.title} />
                    <div className="pro_texts">
                      <h1>{card.title}</h1>
                      <span>{card.category}</span>
                      <div className="row_text">
                        <h1>Rp{card.price}</h1>
                        <p>
                          <del>{card.discount}</del>
                        </p>
                      </div>
                    </div>
                    <div className="pro_mode">
                      <Link to={'/cart'}>
                        <button onClick={()=>addToCart(card)}>Add to cart</button>
                      </Link>
                      <div className="mode_links">
                        <div className="mode_link">
                          <img src={share} alt="share" />
                          <span>Share</span>
                        </div>
                        <div className="mode_link">
                          <img src={compare} alt="Compare" />
                          <span>Compare</span>
                        </div>
                        <div className="mode_link">
                          <img src={heart} alt="Like" />
                          <span>Like</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="pro_btn">
            <button>Show More</button>
          </div>
        </div>
      </section>
      <section className="bed">
        <div className="container">
          <div className="bed_content">
            <div className="bed_texts">
              <h1>50+ Beautiful rooms inspiration</h1>
              <p>
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
              <button>Explore More</button>
            </div>
            <div className="bed_img1">
              <img src={bed1} alt="bed1" />
            </div>
            <div className="bed_img2">
              <img src={bed2} alt="bed2" />
              <img src={bed2} alt="bed2" />
              <img src={bed2} alt="bed2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

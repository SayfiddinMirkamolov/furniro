import { Link } from "react-router-dom";
import "./Shop.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const arrow = "./assets/img/Vector.png";
const share = "./assets/img/share.png";
const compare = "./assets/img/compare.png";
const heart = "./assets/img/heart1.png";
const shop1 = "./assets/img/shop1.png";
const shop2 = "./assets/img/shop2.png";
const shop3 = "./assets/img/shop3.png";
const shop4 = "./assets/img/shop4.png";
const view = "./assets/img/view.png";

const Shop = () => {
  const [filteredCards, setFilteredCards] = useState([]);
  const [cardShop, setCardShop] = useState([]);
  const [value, setValue] = useState("all");
  const [sortOption, setSortOption] = useState("");

  const fetchCards = async () => {
    try {
      const res = await axios.get("http://localhost:3000/shop");
      const data = await res.data;

      setFilteredCards(data);
      setCardShop(data);
    } catch (error) {
      console.log("Error occurred while fetching products:", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const filterCards = (category) => {
    if (category === "all") {
      setFilteredCards(cardShop);
    } else {
      const filtered = cardShop.filter((card) => card.category === category);
      setFilteredCards(filtered);
    }
  };

  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;
    setValue(selectedCategory);

    filterCards(selectedCategory);
  };
  console.log(value);

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
  
    if (option === 'lowToHigh') {
      const sortedCards = filteredCards.slice().sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''));
        const priceB = parseInt(b.price.replace(/\D/g, ''));
        return priceA - priceB;
      });
      setFilteredCards(sortedCards);
    } else if (option === 'highToLow') {
      const sortedCards = filteredCards.slice().sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ''));
        const priceB = parseInt(b.price.replace(/\D/g, ''));
        return priceB - priceA;
      });
      setFilteredCards(sortedCards);
    }
  };
  
  return (
    <div className="shop">
      <section className="bg1">
        <div className="container">
          <div className="shop_links">
            <div className="link_head">
              <h1>Shop</h1>
            </div>
            <div className="links">
              <Link to="/home">Home</Link>
              <img src={arrow} alt="" />
              <Link to="/shop">Shop</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="shop_cards">
        <div className="container">
          <div className="cards_head">
            <div className="filter">
              <select value={value} onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="Chair">Chair</option>
                <option value="Beds">Beds</option>
                <option value="Desk">Desk</option>
              </select>
              <h2>Filter</h2>
              <img src={view} alt="view" />
              <div className="column"></div>
              <span>
                Showing 1–{filteredCards.length} of {cardShop.length} results
              </span>
            </div>
            <div className="sort">
              <h1>Show</h1>
              <span>16</span>
              <select
                name="sortOptions"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="">Sort by</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section className="cards">
        <div className="container">
          <div className="cards_content">
            <div className="cards_shop">
              {filteredCards.map((card, i) => (
                <div className="shop_card" key={i}>
                  <h3>{card.circle}</h3>
                  <img src={card.image} alt={card.title} />
                  <div className="shop_texts">
                    <h1>{card.title}</h1>
                    <span>{card.category}</span>
                    <div className="row_text">
                      <h1>Rp{card.price}</h1>
                      <p>
                        <del>{card.discount}</del>
                      </p>
                    </div>
                  </div>
                  <div className="shop_mode">
                    <Link to={'/single'}>
                    <button>Add to cart</button></Link>
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
        </div>
      </section>
      <section className="free">
        <div className="free_content">
          <div className="free_img">
            <img src={shop1} alt="shop1" />
            <div className="free_text">
              <h1>High Quality</h1>
              <span>crafted from top materials</span>
            </div>
          </div>
          <div className="free_img">
            <img src={shop2} alt="shop2" />
            <div className="free_text">
              <h1>Warranty Protection</h1>
              <span>Over 2 years</span>
            </div>
          </div>
          <div className="free_img">
            <img src={shop3} alt="shop3" />
            <div className="free_text">
              <h1>Free Shipping</h1>
              <span>Order over 150 $</span>
            </div>
          </div>
          <div className="free_img">
            <img src={shop4} alt="shop4" />
            <div className="free_text">
              <h1>24 / 7 Support</h1>
              <span>Dedicated support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;

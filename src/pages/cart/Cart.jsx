import { NavLink } from "react-router-dom";
import { useShopContext } from "../../components/header/ShopProvider";
import "./Cart.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const icon = "./assets/img/Meubel.png";
const arrow = "./assets/img/Vector.png";
const shop1 = "./assets/img/shop1.png";
const shop2 = "./assets/img/shop2.png";
const shop3 = "./assets/img/shop3.png";
const shop4 = "./assets/img/shop4.png";

const Cart = () => {
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

  const { cartItems, addToCart, removeFromCart, calculateTotalPrice } =
    useShopContext();

  return (
    <div className="cart">
      <section className="cart_hero">
        <div className="container">
          <div className="cart_hero_text">
            <div className="cart_head">
              <img src={icon} alt="" />
              <h1>Cart</h1>
            </div>
            <div className="links">
              <NavLink to="/">Home</NavLink>
              <img src={arrow} alt="arrow" />
              <NavLink to="">Cart</NavLink>
            </div>
          </div>
        </div>
      </section>
      <section className="carts">
        <div className="container">
          <div className="cart_content">
            <div className="got_cart">
              <div className="cart_head">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
              </div>
              {cartItems.map((item, index) => (
                <div className="card_item" key={index}>
                  <img src={item.image} alt={item.title} />

                  <div className="item_texts">
                    <h1>{item.description}</h1>
                    <p>{item.title}</p>
                    <span>{item.price}</span>
                    <button onClick={() => addToCart(item.id)}>Add</button>
                    <input value= {cartItems[cards.id]} />
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart_total">
              <h1>Cart Totals</h1>
              <div className="total">
                <div className="total_text">
                  <span>Subtotal</span>
                  <p>{calculateTotalPrice()}</p>
                </div>
                <div className="total_text">
                  <span>Total</span>
                  <h2>{calculateTotalPrice()}</h2>
                </div>
              </div>
              <div className="checkout">
                <NavLink>
                  <button>Checkout</button>
                </NavLink>
              </div>
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

export default Cart;

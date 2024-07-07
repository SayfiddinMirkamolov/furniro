import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { useEffect, useState } from "react";
import { useShopContext } from "./ShopProvider";
const logo = "./assets/img/Logo.png";
const heart = "./assets/img/heart.png";
const search = "./assets/img/search.png";
const account = "./assets/img/account.png";
const shopping = "./assets/img/shopping.png";

const Header = () => {
  const { cartItems } = useShopContext();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const navMenu = document.querySelector(".nav_menu");
    if (navMenu) {
      if (!isNavOpen) {
        navMenu.classList.add("active");
      } else {
        navMenu.classList.remove("active");
      }
    }
  }, [isNavOpen]);
  console.log(isNavOpen);
  return (
    <div className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav_logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <span>Furniro</span>
          </div>
          <div className="menu_content">
            <ul className={`nav_menu ${isNavOpen ? "active" : ""}`}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav_icons">
            <ul>
              <li>
                <Link to="/">
                  <img src={heart} alt="heart" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={search} alt="seach" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={account} alt="account" />
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <img src={shopping} alt="shopping" />
                  {cartItems.lenght > 0 && (
                    <span className="cart_counter"> {cartItems.lenght}</span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
          <div className="burger" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

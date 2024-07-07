import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="line">
        <span></span>
      </div>
      <div className="container">
        <div className="footer_content">
          <div className="content">
            <div className="footer_texts order1">
              <Link to="/">
                <span>Funiro.</span>
              </Link>
              <p>
                400 University Drive Suite 200 Coral Gables,
                <br /> FL 33134 USA
              </p>
            </div>
            <div className="footer_texts order2">
              <h1>Links</h1>
              <ul>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>Shop</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="content">
            <div className="footer_texts order3">
              <h1>Help</h1>
              <ul>
                <li>
                  <Link>Payment Options</Link>
                </li>
                <li>
                  <Link>Returns</Link>
                </li>
                <li>
                  <Link>Privacy Policies</Link>
                </li>
              </ul>
            </div>
            <div className="footer_texts order4">
              <h1>Newsletter</h1>
              <form>
                <input type="email" placeholder="Enter Your Email Address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="line1">
          <span></span>
        </div>
        <h2>2023 furino. All rights reverved</h2>
      </div>
    </footer>
  );
};

export default Footer;

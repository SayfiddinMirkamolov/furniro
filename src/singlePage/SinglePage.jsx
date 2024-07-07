import "./SinglePage.scss";
import { Link } from "react-router-dom";
const arrow = "./assets/img/Vector.png";
const sofa1 = "./assets/img/sofa.png";
const sofa2 = "./assets/img/sofa3.png";
const SinglePage = () => {
  return (
    <div className="single_page">
      <section className="single">
        <div className="container">
          <div className="single_head">
            <Link>Home</Link>
            <img src={arrow} alt="arrow" />
            <Link>Shop</Link>
            <img src={arrow} alt="arrow" />
            <div className="column"></div>
            <Link>Asgaard sofa</Link>
          </div>
        </div>
      </section>
      <section className="single_texts">
        <div className="container">
          <div className="text_head">
            <h1>Description</h1>
            <span>Additional Information</span>
            <span>Reviews [5]</span>
          </div>
          <div className="texts">
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
          <div className="texts_img">
            <img src={sofa1} alt="sofa" />
            <img src={sofa2} alt="sofa" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;

import "./Locations.css";
import Heart from "../../assets/heart.png";
import Img1 from "../../assets/img1.webp";
import Img2 from "../../assets/img2.webp";
import Img3 from "../../assets/img3.webp";
import Img4 from "../../assets/img4.webp";
import Img5 from "../../assets/img5.webp";
import Img6 from "../../assets/img6.webp";
import Img7 from "../../assets/img7.webp";

export const Locations = () => {
  return (
    <div>
      <div className="section-items">
        <div className="item-container">
          <a href="#.">
            <img className="heart-favori" src={Heart} alt="" />
          </a>
          <img className="photo-location" src={Img1} alt="" />
          <p>Stege, Danmark</p>
        </div>
        <div className="item-container">
          <a href="#.">
            <img className="heart-favori" src={Heart} alt="" />
          </a>
          <img className="photo-location" src={Img2} alt="" />
          <p>Stege, Danmark</p>
        </div>
        <div className="item-container">
          <a href="#.">
            <img className="heart-favori" src={Heart} alt="" />
          </a>
          <img className="photo-location" src={Img3} alt="" />
          <p>Stege, Danmark</p>
        </div>
        <div className="item-container">
          <a href="#.">
            <img className="heart-favori" src={Heart} alt="" />
          </a>
          <img className="photo-location" src={Img4} alt="" />
          <p>Stege, Danmark</p>
        </div>
        <div className="item-container">
          <a href="#.">
            <img className="heart-favori" src={Heart} alt="" />
          </a>
          <img className="photo-location" src={Img5} alt="" />
          <p>Stege, Danmark</p>
        </div>
        <div className="item-container">
          <a href="#.">
            <img className="heart-favori" src={Heart} alt="" />
          </a>
          <img className="photo-location" src={Img6} alt="" />
          <p>Stege, Danmark</p>
        </div>
        <div className="item-container">
          <a href="#.">
            <img className="heart-favori" src={Heart} alt="" />
          </a>
          <img className="photo-location" src={Img7} alt="" />
          <p>Stege, Danmark</p>
        </div>
        <div className="item-container">
          <a href="#.">
            <img className="heart-favori" src={Heart} alt="" />
          </a>
          <img className="photo-location" src={Img1} alt="" />
          <p>Stege, Danmark</p>
        </div>
      </div>
    </div>
  );
};

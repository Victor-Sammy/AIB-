import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import AIBLogo from "../../components/vectors/AIBLogo";
import AIBTextLogo from "../../components/vectors/AIBTextLogo";
import "../../sass/pages/_landingPage.scss";
import AppStore from "../../assets/appstore.png";
import GooglePlay from "../../assets/gplay.png";
import Image1 from "../../assets/home1.png";
import Image2 from "../../assets/home2.png";
import RoundHeart from "../../components/vectors/RoundHeart";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <div className="landingPage__content">
        <div className="landingPage__content-logo">
          <AIBLogo />
          <AIBTextLogo />
        </div>
        <div className="landingPage__content-main">
          <h2>
            Get the most out of every <br /> shopping experience
          </h2>
          <Link to="/home" className="btn">
            Start Shopping{" "}
            <span>
              <BsArrowRightShort />
            </span>
          </Link>
        </div>
        <div className="landingPage__content-stores">
          <img src={AppStore} alt="" />
          <img src={GooglePlay} alt="" />
        </div>
      </div>
      <div className="landingPage__images">
        <div className="landingPage__images-tags">
          <div className="tag">
            <span className="heart">
              <RoundHeart />
            </span>
            <div>
              <div className="name">Julie Michael</div>
              <div className="review">Best shopping experience!</div>
            </div>
          </div>
          <div className="tag">
            <span className="heart">
              <RoundHeart />
            </span>
            <div>
              <div className="name">Kenny Mich</div>
              <div className="review">Highly Recommended!</div>
            </div>
          </div>
        </div>
        <div className="landingPage__images-wrapper">
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
        </div>
      </div>
    </div>
  );
}

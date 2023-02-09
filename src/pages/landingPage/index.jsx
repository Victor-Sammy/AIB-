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
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <motion.div
        transition={{ delay: 1.9, duration: 0.8 }}
        initial={{ y: "40vh" }}
        animate={{ y: 0 }}
        className="landingPage__content"
      >
        <div className="landingPage__content-logo">
          <AIBLogo className="aibLogo" />
          <motion.span
            transition={{ delay: 0.8, ease: "easeOut", duration: 0.3 }}
            initial={{ x: -47, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <AIBTextLogo />
          </motion.span>
        </div>
        <motion.div
          transition={{ delay: 1.9, duration: 0.8 }}
          initial={{ y: "20vh", opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="landingPage__content-main"
        >
          <h2>
            Get the most out of every <br /> shopping experience
          </h2>
          <Link to="/home" className="btn">
            Start Shopping{" "}
            <span>
              <BsArrowRightShort />
            </span>
          </Link>
        </motion.div>
        <div className="landingPage__content-stores">
          <img src={AppStore} alt="" />
          <img src={GooglePlay} alt="" />
        </div>
      </motion.div>
      <div className="landingPage__images">
        <motion.div
          transition={{ delay: 3.5, duration: 0.8 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="landingPage__images-tags"
        >
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
        </motion.div>
        <div className="landingPage__images-wrapper">
          <motion.img
            transition={{ delay: 1.9, duration: 0.8 }}
            initial={{ x: "-120%" }}
            animate={{ x: 0 }}
            src={Image1}
            alt=""
          />
          <motion.img
            transition={{ delay: 1.9, duration: 0.8 }}
            initial={{ x: "120%" }}
            animate={{ x: 0 }}
            src={Image2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

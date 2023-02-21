import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../sass/pages/_home.scss";
import Image1 from "../assets/image2.png";
import Image2 from "../assets/image4.png";

const Ads2 = () => {
  return (
      <div className="second-ads">
        <div className="ad1">
          <Link to="">
            <img src={Image1} alt="" />
          </Link>
        </div>

        <div className="ad2">
          <Link to="">
            <img src={Image2} alt="" />
          </Link>
        </div>
      </div>
  );
};

export default Ads2;

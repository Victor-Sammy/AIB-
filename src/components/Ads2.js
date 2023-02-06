import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../sass/pages/_home.scss";
import Image1 from "../assets/image2.png";
import Image2 from "../assets/image4.png";

const Ads2 = () => {
  const [photo1, setPhoto1] = useState([]);
  const [photo2, setPhoto2] = useState([]);

  useEffect(() => {
    fetchSecondAds();
  }, []);

  const fetchSecondAds = async () => {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const response2 = await fetch("https://fakestoreapi.com/products/1");
    const ad1Data = await response.json();
    const ad2Data = await response2.json();
    setPhoto1(ad1Data);
    setPhoto2(ad2Data);
  };
  return (
    <div>
      <div className="second-ads">
        <div className="ad1">
          <Link to="">
            {/* <img src={photo1.image} alt='' /> */}
            <img src={Image1} alt="" />
          </Link>
        </div>

        <div className="ad2">
          <Link to="">
            {/* <img src={photo2.image} alt='' /> */}
            <img src={Image2} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ads2;

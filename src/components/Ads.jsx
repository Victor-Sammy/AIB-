import React, { useEffect, useState } from "react";
import "../sass/pages/_home.scss";
import { Link } from "react-router-dom";
import Image3 from "../assets/AIIB FLYER.fw 1.fw2 1.png";

const Ads = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetchFirstAds();
  }, []);

  const fetchFirstAds = async () => {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const adData = await response.json();
    setImage(adData);
  };
  return (
    <div>
      <div className="first-ads">
        <Link to="">
          {/* <img src={image.image} alt='' /> */}
          <img src={Image3} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Ads;

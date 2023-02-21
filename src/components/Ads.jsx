import React, { useEffect, useState } from "react";
import "../sass/pages/_home.scss";
import { Link } from "react-router-dom";
import Image3 from "../assets/AIIB FLYER.fw 1.fw2 1.png";

const Ads = () => {
  return (
    <Link className="ads" to="">
      <img src={Image3} alt="" />
    </Link>
  );
};

export default Ads;

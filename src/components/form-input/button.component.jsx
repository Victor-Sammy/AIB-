import React from "react";

import "../../sass/components/button.style.scss";
import Arrow from "../../assets/arrow-right.png";
import LoadingSpinner from "../vectors/LoadingSpinner";

const CustomButton = ({ children, className, loading, ...otherProps }) => (
  <button className={`arrowButton ${className ?? ""}`} {...otherProps}>
    {children}

    <div className="arrow">
      {loading ? <LoadingSpinner /> : <img src={Arrow} alt="icon" />}
    </div>
  </button>
);

export default CustomButton;

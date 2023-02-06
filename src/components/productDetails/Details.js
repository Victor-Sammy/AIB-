import React from "react";
import "../../sass/pages/_product.scss";

const Details = ({ product }) => {
  return (
    <div className="details_info">
      <div className="row1">
        <div className="col">
          <h2>BRAND</h2>
          <h1>{product.brand || "Null"}</h1>
        </div>
        <div className="col">
          <h2>DISPLAY TYPE</h2>
          <h1>OLED</h1>
        </div>
        <div className="col">
          <h2>INTERNAL STORAGE</h2>
          <h1>256GB</h1>
        </div>
      </div>
      <div className="row2">
        <div className="col">
          <h2>MODEL</h2>
          <h1>Iphone 13 pro</h1>
        </div>
        <div className="col">
          <h2>SCREEN SIZE</h2>
          <h1>6.1</h1>
        </div>
        <div className="col">
          <h2>CARD SLOT</h2>
          <h1>NO</h1>
        </div>
      </div>
      <div className="row3">
        <div className="col">
          <h2>CONDITION</h2>
          <h1>{product.condition}</h1>
        </div>
        <div className="col">
          <h2>RESOLUTION</h2>
          <h1>1125 x 2436</h1>
        </div>
        <div className="col">
          <h2>MAIN CAMERA</h2>
          <h1>Triple</h1>
        </div>
      </div>
      <div className="row4">
        <div className="col">
          <h2>SIM</h2>
          <h1>Nano-SIM</h1>
        </div>
        <div className="col">
          <h2>RAM</h2>
          <h1>3GB</h1>
        </div>
        <div className="col">
          <h2>SELFIE CAMERA</h2>
          <h1>12MP (f/2.2)</h1>
        </div>
      </div>
      <div className="row5">
        <div className="col">
          <h2>os</h2>
          <h1>IOS</h1>
        </div>
        <div className="col">
          <h2>COLOUR</h2>
          <h1>Other</h1>
        </div>
        <div className="col">
          <h2>BATTERY</h2>
          <h1>3190mAh</h1>
        </div>
      </div>
    </div>
  );
};

export default Details;

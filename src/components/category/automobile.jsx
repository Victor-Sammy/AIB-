import React from "react";
import SubCategory from "../subcategory/subcategory";
import Ads from "../Ads";
import Ads2 from "../Ads2";
import SubProducts from "../subcategory/products";
import SubMenu from "../subcategory/submenu";

const Automobiles = () => {
  return (
    <div>
      <SubCategory
        url="https://fakestoreapi.com/products?limit=5"
        header="Cars & Automobiles"
        link="#"
      />
      <Ads2 />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Cars"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Buses"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Motorcycle"
        link="#"
      />
      <Ads />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Trucks & Trailers"
        link="#"
      />

      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Vehicles Parts & Accessories"
        link="#"
      />
      <Ads />

      <SubProducts
        url="https://fakestoreapi.com/products"
        header="Automobile Products"
      />
    </div>
  );
};

export default Automobiles;

import React from "react";
import SubCategory from "../subcategory/subcategory";
import Ads from "../Ads";
import Ads2 from "../Ads2";
import SubProducts from "../subcategory/products";
import SubMenu from "../subcategory/submenu";

const Phones = () => {
  return (
    <div>
      <SubCategory
        url="https://fakestoreapi.com/products?limit=5"
        header="Phones & Tablets"
        link="#"
      />
      <Ads2 />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Mobile Phones"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Mobile Tablets"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Phones & Tablet Accessories"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Smart Watches & Trackers"
        link="#"
      />
      <Ads />
      <SubProducts
        url="https://fakestoreapi.com/products"
        header="Phones & Tablets"
      />
    </div>
  );
};

export default Phones;

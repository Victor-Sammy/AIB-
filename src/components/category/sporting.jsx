import React from "react";
import SubCategory from "../subcategory/subcategory";

import Ads2 from "../Ads2";
import SubProducts from "../subcategory/products";
import SubMenu from "../subcategory/submenu";

const Sporting = () => {
  return (
    <div>
      <SubCategory
        url="https://fakestoreapi.com/products?limit=10"
        header="Sporting Items"
        link="#"
      />
      <Ads2 />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Sport Equipment"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Sport Accessories"
        link="#"
      />
      <SubProducts
        url="https://fakestoreapi.com/products"
        header="Sporting Products"
      />
    </div>
  );
};

export default Sporting;

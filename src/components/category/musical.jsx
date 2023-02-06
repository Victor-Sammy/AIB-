import React from "react";
import SubCategory from "../subcategory/subcategory";

import Ads2 from "../Ads2";
import SubProducts from "../subcategory/products";
import SubMenu from "../subcategory/submenu";

const Musical = () => {
  return (
    <div>
      <SubCategory
        url="https://fakestoreapi.com/products?limit=10"
        header="Musical"
        link="#"
      />
      <Ads2 />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Musical Equipment"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Music Record Equipment"
        link="#"
      />
      <SubProducts
        url="https://fakestoreapi.com/products"
        header="Musical Products"
      />
    </div>
  );
};

export default Musical;

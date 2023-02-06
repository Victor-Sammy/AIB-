import React from "react";
import SubCategory from "../subcategory/subcategory";
import Ads from "../Ads";
import Ads2 from "../Ads2";
import SubProducts from "../subcategory/products";
import SubMenu from "../subcategory/submenu";

const Furniture = () => {
  return (
    <div>
      <SubCategory
        url="https://fakestoreapi.com/products?limit=5"
        header="Home, Furniture & Appliances"
        link="#"
      />
      <Ads2 />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Furniture"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Home Appliances"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Kitchen Appliances"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Kitchen Ware"
        link="#"
      />
      <Ads />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Gardening"
        link="#"
      />
      <SubProducts
        url="https://fakestoreapi.com/products"
        header="Home & Furniture Products"
      />
    </div>
  );
};

export default Furniture;

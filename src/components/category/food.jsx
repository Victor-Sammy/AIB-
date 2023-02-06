import React from "react";
import SubCategory from "../subcategory/subcategory";
import Ads from "../Ads";
import Ads2 from "../Ads2";
import SubProducts from "../subcategory/products";
import SubMenu from "../subcategory/submenu";

const Food = () => {
  return (
    <div>
      <SubCategory
        url="https://fakestoreapi.com/products?limit=5"
        header="Food & Agriculture"
        link="#"
      />
      <Ads2 />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Restaurants"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Meals & Drinks"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Livestock"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Farm Supplements & Seeds"
        link="#"
      />
      <Ads />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Farming Equipments"
        link="#"
      />
      <SubProducts
        url="https://fakestoreapi.com/products"
        header="Food & Agricultural  Products"
      />
    </div>
  );
};

export default Food;

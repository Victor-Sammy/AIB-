import React from "react";
import SubCategory from "../subcategory/subcategory";
import Ads from "../Ads";
import Ads2 from "../Ads2";
import SubProducts from "../subcategory/products";
import SubMenu from "../subcategory/submenu";

const Kids = () => {
  return (
    <div>
      <SubCategory
        url="https://fakestoreapi.com/products?limit=10"
        header="Babies & Kids"
        link="#"
      />
      <Ads2 />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Baby Accessories"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Children & Babies Clothing"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Children & Babies Shoes"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Toys"
        link="#"
      />
      <Ads />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Children Furniture"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Children & Babies Care"
        link="#"
      />

      <SubProducts
        url="https://fakestoreapi.com/products"
        header="Kids Products"
      />
    </div>
  );
};

export default Kids;

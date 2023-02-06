import React from "react";
import SubCategory from "../../components/subcategory/subcategory";
import Ads from "../../components/Ads";
import Ads2 from "../../components/Ads2";
import SubProducts from "../../components/subcategory/products";
import SubMenu from "../../components/subcategory/submenu";

const Animals = () => {
  return (
    <div>
      <SubCategory
        url="https://fakestoreapi.com/products?limit=10"
        header="Animals & Pets"
        link="#"
      />
      <Ads2 />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Pet Accessories"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Dogs"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Cats"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Birds"
        link="#"
      />
      <Ads />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Other Animals"
        link="#"
      />

      <SubProducts url="https://fakestoreapi.com/products" header="Animals" />
    </div>
  );
};

export default Animals;

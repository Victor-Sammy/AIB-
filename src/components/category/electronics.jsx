import React from "react";
import SubCategory from "../subcategory/subcategory";
import Ads from "../Ads";
import Ads2 from "../Ads2";
import SubProducts from "../subcategory/products";
import SubMenu from "../subcategory/submenu";

const Electronics = () => {
  return (
    <div>
      <SubCategory
        url="https://fakestoreapi.com/products?limit=10"
        header="Electronics"
        link="#"
      />
      <Ads2 />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Laptops & Computers"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Headphones"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Audio & Music Equipment"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Computer Accessories"
        link="#"
      />
      <Ads />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Electronic Accessories"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Photo & Video Camera"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Printers, Scanners, Photocopy"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Videos Games Accessories"
        link="#"
      />
      <Ads />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="TV & DVD Equipment"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Electrical Equipment"
        link="#"
      />
      <SubProducts
        url="https://fakestoreapi.com/products"
        header="Electronic Products"
      />
    </div>
  );
};

export default Electronics;

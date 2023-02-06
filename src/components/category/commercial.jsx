import React from "react";
import SubCategory from "../../components/subcategory/subcategory";
import Ads from "../Ads";
import Ads2 from "../Ads2";
import SubProducts from "../../components/subcategory/products";
import SubMenu from "../../components/subcategory/submenu";

const Commercial = () => {
  return (
    <div>
      <SubCategory
        url="https://fakestoreapi.com/products?limit=10"
        header="Commercial Equipments & Tools"
        link="#"
      />
      <Ads2 />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Measuring Tools"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Doors & Windows"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Salon Equipments"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Stage & Lighting Equipments"
        link="#"
      />
      <Ads />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Sound Equipments"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Stationery"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Medical Equipment"
        link="#"
      />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Building Materials"
        link="#"
      />
      <Ads />
      <SubMenu
        url="https://fakestoreapi.com/products?limit=5"
        header="Safety Equipments"
        link="#"
      />
      <SubProducts
        url="https://fakestoreapi.com/products"
        header="Commercial Products"
      />
    </div>
  );
};

export default Commercial;

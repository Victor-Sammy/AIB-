import React, { useEffect, useState } from "react";
import "../../sass/pages/_addProduct.scss";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import AnimalsOpt from "./AnimalsOpt";
import ElectronicsOpt from "./ElectronicsOpt";
import FashionOp from "./fashion/FashionOp";
import CarOP from "./cars/CarOP";
import FurnitureOp from "./furnitureAppliances/FurnitureOp";
import PhoneTabOp from "./phoneTab/PhoneTabOp";
import RestaurantOp from "./restaurants/RestaurantOp";
import SportOp from "./sports/SportOp";
import KidsOp from "./kids/KidsOp";
import MusicArtOp from "./music/MusicArtOp";
import HouseOp from "./housing/HouseOp";
import CommOp from "./commEquip/CommOp";
import HealthOp from "./health/HealthOp";
import ServicesOp from "./servicess/ServicesOp";

const AddProduct = () => {
  const category = localStorage.getItem("category")
    ? localStorage.getItem("category")
    : "no-subCategory";

  const [fashionContentVisible, setFashionContentVisible] = useState(false);
  const [animalsContentVisible, setAnimalsContentVisible] = useState(false);
  const [electronicsContentVisible, setElectronicsContentVisible] =
    useState(false);
  const [commercialEquipContentVisible, setCommercialEquipContentVisible] =
    useState(false);
  const [carsContentVisible, setCarsContentVisible] = useState(false);
  const [furnitureContentVisible, setFurnitureContentVisible] = useState(false);
  const [phonesContentVisible, setPhonesContentVisible] = useState(false);
  const [sportItemsContentVisible, setSportItemsContentVisible] =
    useState(false);
  const [restauantsContentVisible, setRestauantsContentVisible] =
    useState(false);
  const [musicContentVisible, setMusicContentVisible] = useState(false);
  const [kidsContentVisible, setKidsContentVisible] = useState(false);
  const [healthContentVisible, setHealthContentVisible] = useState(false);
  const [housingPropertyContentVisible, setHousingPropertyContentVisible] =
    useState(false);
  const [jobsServicesContentVisible, setJobsServicesContentVisible] =
    useState(false);

  useEffect(() => {
    category === "fashion"
      ? setFashionContentVisible(true)
      : setFashionContentVisible(false);
    category === "animals"
      ? setAnimalsContentVisible(true)
      : setAnimalsContentVisible(false);
    category === "electronics"
      ? setElectronicsContentVisible(true)
      : setElectronicsContentVisible(false);
    category === "commercialEquip"
      ? setCommercialEquipContentVisible(true)
      : setCommercialEquipContentVisible(false);
    category === "cars"
      ? setCarsContentVisible(true)
      : setCarsContentVisible(false);
    category === "furniture"
      ? setFurnitureContentVisible(true)
      : setFurnitureContentVisible(false);
    category === "phones"
      ? setPhonesContentVisible(true)
      : setPhonesContentVisible(false);
    category === "housing"
      ? setHousingPropertyContentVisible(true)
      : setHousingPropertyContentVisible(false);
    category === "sports"
      ? setSportItemsContentVisible(true)
      : setSportItemsContentVisible(false);
    category === "restaurant"
      ? setRestauantsContentVisible(true)
      : setRestauantsContentVisible(false);
    category === "music"
      ? setMusicContentVisible(true)
      : setMusicContentVisible(false);
    category === "kids"
      ? setKidsContentVisible(true)
      : setKidsContentVisible(false);
    category === "health"
      ? setHealthContentVisible(true)
      : setHealthContentVisible(false);
    category === "services"
      ? setJobsServicesContentVisible(true)
      : setJobsServicesContentVisible(false);
  }, [category]);

  /*const handleOnChange = (e) => {
    setCategory(e.target.value)
  }*/

  return (
    <section className="addProduct">
      <div className="ap-back">
        <BsFillArrowLeftSquareFill />
      </div>
      <h1 className="ap-title">Add a new Product</h1>
      <div className="ap-category">
        <select
          className="cat-select"
          value={category}
          //onChange={handleOnChange}
        >
          <option disabled value="category">
            Select Category
          </option>
          <option value="fashion">Fashion</option>
          <option value="animals">Animals</option>
          <option value="electronics">Electronics</option>
          <option value="commercialEquip">Commercial Equip. & Tools</option>
          <option value="cars">Cars & Automobiles</option>
          <option value="furniture">Furniture</option>
          <option value="phones">Phones & Tablets</option>
          <option value="sports">Sport Items</option>
          <option value="restaurant">Restaurants, Food & Agriculture</option>
          <option value="kids">Kids & Babies world</option>
          <option value="music">Music</option>
          <option value="housing">Hotels, Housing & Property</option>
          <option value="health">Health and Beauty</option>
          <option value="services">Jobs, Handwork, services and cvs</option>
        </select>
      </div>
      <div>
        {fashionContentVisible && <FashionOp />}
        {animalsContentVisible && <AnimalsOpt />}
        {electronicsContentVisible && <ElectronicsOpt />}
        {commercialEquipContentVisible && <CommOp />}
        {carsContentVisible && <CarOP />}
        {furnitureContentVisible && <FurnitureOp />}
        {phonesContentVisible && <PhoneTabOp />}
        {sportItemsContentVisible && <SportOp />}
        {housingPropertyContentVisible && <HouseOp />}
        {restauantsContentVisible && <RestaurantOp />}
        {musicContentVisible && <MusicArtOp />}
        {kidsContentVisible && <KidsOp />}
        {healthContentVisible && <HealthOp />}
        {jobsServicesContentVisible && <ServicesOp />}
      </div>
    </section>
  );
};

export default AddProduct;

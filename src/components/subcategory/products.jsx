import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "../../sass/components/subcategory.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

const sortByKey = (array, key) => {
  let sortKey = key;
  if (key === "popularity") {
    sortKey = "rating.rate";
  }

  //option 2 have different sort functions based on the number of nested
  let keys = sortKey.split(".");
  if (keys.length === 1) {
    return array.sort((a, b) => (a[sortKey] < b[sortKey] ? -1 : 1));
  } else {
    return array.sort((a, b) =>
      a[keys[0]][keys[1]] > b[keys[0]][keys[1]] ? -1 : 1
    );
  }
};

const SubProducts = ({ url, header }) => {
  const [products, setProducts] = useState([]);
  const [addToWishlist, setAddToWishlist] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetchProducts();
  });

  const fetchProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const sortData = sortByKey(data, selected);
    setProducts(sortData);
  };

  return (
    <div className="product">
      <div className="category-head">
        <span>{header}</span>
        <div className="dropdown">
          <span> Sort by :</span>
          <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
            {selected || "Filter"}
            <span>
              <BsChevronDown />
            </span>
          </div>
          {isActive && (
            <div className="dropdown-content">
              <div
                className="dropdown-item"
                onClick={(e) => {
                  setSelected(e.target.textContent);
                  setIsActive(!isActive);
                }}
              >
                popularity
              </div>
              <div
                className="dropdown-item"
                onClick={(e) => {
                  setSelected(e.target.textContent);
                  setIsActive(!isActive);
                }}
              >
                price
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="category-display">
        <div className="slider" id="slider">
          {products.map((value) => {
            return (
              <div key={value.id} className="item">
                <NavLink to={`/products/${value.id}`} className="trend-link">
                  <div className="image">
                    <img src={value.image} alt="" />
                  </div>
                  <div className="details">
                    <div className="cat-name">
                      <h4>{value.category}</h4>
                    </div>
                    <div className="title">
                      <h3>{value.title}</h3>
                    </div>
                    <div className="price">
                      <h2>NGN {value.price}</h2>
                    </div>
                    <div className="rating">
                      <span className="stars">⭐⭐⭐⭐⭐</span>
                      <span className="num">
                        {value.rating.rate} ({value.rating.count})
                      </span>
                    </div>
                  </div>
                </NavLink>
                <div className="wishlist-icon">
                  <AiOutlineHeart
                    key={value.id}
                    onClick={() => setAddToWishlist(!addToWishlist)}
                    className={`heart-icon ${
                      addToWishlist ? "heart-active" : ""
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubProducts;

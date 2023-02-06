import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "../../sass/components/subcategory.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

const SubMenu = ({ url, header, link }) => {
  const navigate = useNavigate();
  const [store, setStore] = useState([]);
  const [addToWishlist, setAddToWishlist] = useState(false);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStore(data);
  };

  return (
    <div className="category">
      <div className="category-head">
        <span>{header}</span>

        <div className="btn" onClick={() => navigate(link)}>
          <div className="btn-txt">See All</div>
          <div className="arr-icon">
            <BsArrowRightShort />
          </div>
        </div>
      </div>
      <div className="category-display">
        <div className="slider" id="slider">
          {store.map((value) => {
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
                      <span className="num">5.0 (34k)</span>
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

export default SubMenu;

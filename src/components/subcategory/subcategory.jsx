import React, { useState, useEffect } from "react";

import "../../sass/components/subcategory.scss";
import { useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const SubCategory = ({ url, header, link }) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetchCategory();
  });

  const fetchCategory = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCategory(data);
  };

  return (
    <section className="sub-cat">
      <div className="sub-cat-link">
        <span onClick={() => navigate("/home")}>Home</span>
        <span>
          {" "}
          <BsChevronRight />{" "}
        </span>
        <span>{header}</span>
      </div>
      <div className="sub-cat-head">
        <span>{header}</span>
      </div>
      <div className="sub-cat-display">
        {category.map((cat) => {
          return (
            <div
              key={cat.id}
              className="cat-card"
              onClick={() => navigate(link)}
            >
              <div className="cat-image">
                <img src={cat.image} alt="" />
              </div>
              <div className="cat-name">
                <span>{cat.category}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SubCategory;

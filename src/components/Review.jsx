import React from "react";
import "../sass/pages/_productDetails.scss";
import { BsArrowRightShort } from "react-icons/bs";
import Ratings from "./Ratings";
import { useState, useEffect } from "react";
import USERPIC from "../assets/user1.jpeg";
// import { useParams } from "react-router-dom";
// import products from "../data";
import axios from "axios";

const Review = ({ id }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getReviewData();
  }, []);

  const getReviewData = () => {
    axios
      .get(`/ad/products/${id}/reviews`)
      .then((response) => {
        const reviewData = response.data;

        setData(reviewData);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div>
      <div className="RandR">
        <div className="rr-top">
          <div className="rr-title">Ratings & Reviews</div>
          <div className="rr-btn">
            <div className="rr-btn-txt">See All</div>
            <div className="rr-arr-icon">
              <BsArrowRightShort />
            </div>
          </div>
        </div>

        <div className="rr-card">
          <div className="card-rating">
            <div className="star-rating">
              <h1>4.0</h1>
              <h2>⭐⭐⭐⭐⭐</h2>
              <p>Based on {data?.count} reviews</p>
            </div>
            <div className="line">
              <hr />
            </div>
            <div className="rate-level">
              <div className="excellent">
                <div className="rating-text">Excellent</div>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
              </div>
              <div className="good">
                <div className="rating-text">Good</div>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
              </div>
              <div className="average">
                <div className="rating-text">Average</div>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
              </div>
              <div className="b-average">
                <div className="rating-text">Below Average</div>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
              </div>
              <div className="poor">
                <div className="rating-text">Poor</div>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="user-ratings">
            {data?.results.map((item) => (
              <div>
                <div>
                  <div className="usr">
                    <div className="usr-img">
                      <img src={USERPIC} alt="" />
                    </div>
                    <div>
                      <h1>{item?.user}</h1>
                      <Ratings value={item?.rating} reviews />
                    </div>
                  </div>
                  <div className="review-content">
                    <p>{item?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

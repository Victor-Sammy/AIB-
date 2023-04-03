import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { getProductReviews } from "../../Api/products";
import Bar from "../Bar/Bar";
import Button from "../Button";
import Ratings from "../Ratings";
import "../../sass/pages/_productDetails.scss";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import imagePlaceholder from "../../assets/userIcon.jpg";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");

export default function RatingsAndReviews({ id, ratings }) {
  const navigate = useNavigate();
  const { data: reviews, isLoading } = useQuery({
    queryKey: ["productReviews", id],
    queryFn: () => getProductReviews(id),
  });

  console.log("reviews", reviews);

  return (
    <div className="productDetails_feedback">
      <div className="productDetails_feedback-header">
        <h2>Ratings & Reviews</h2>
        <Button
          text="See All"
          iconRight={<BsArrowRightShort />}
          onClick={(e) => navigate(`products/${id}/reviews`)}
        />
      </div>

      <div className="productDetails_feedback-wrap">
        <div className="productDetails_feedback-ratings">
          <div className="ratingDetails">
            <p className="ratingDetails_average">{ratings.average}</p>
            <p className="ratingDetails_ratings">
              <Ratings rating={ratings.average} />
            </p>
            <p className="ratingDetails_count">
              Based on {ratings.count} reviews
            </p>
          </div>
          <table className="ratingBars">
            <tbody>
              <tr>
                <td className="ratingBars_tag">Excellent</td>
                <td className="ratingBars_bar">
                  <Bar
                    value={ratings.details["5"]}
                    total={ratings.count}
                    color="#27A08B"
                  />
                </td>
              </tr>
              <tr>
                <td className="ratingBars_tag">Good</td>
                <td className="ratingBars_bar">
                  <Bar
                    value={ratings.details["4"]}
                    total={ratings.count}
                    color="#8CCF65"
                  />
                </td>
              </tr>
              <tr>
                <td className="ratingBars_tag">Average</td>
                <td className="ratingBars_bar">
                  <Bar
                    value={ratings.details["3"]}
                    total={ratings.count}
                    color="#FDC73D"
                  />
                </td>
              </tr>
              <tr>
                <td className="ratingBars_tag">Below Average</td>
                <td className="ratingBars_bar">
                  <Bar
                    value={ratings.details["2"]}
                    total={ratings.count}
                    color="#FB9B06"
                  />
                </td>
              </tr>
              <tr>
                <td className="ratingBars_tag">Poor</td>
                <td className="ratingBars_bar">
                  <Bar
                    value={ratings.details["1"]}
                    total={ratings.count}
                    color="#E20D0D"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {reviews?.results && (
          <div className="productDetails_feedback-reviews">
            {reviews.results.map((review) => (
              <ReviewItem review={review} key={review.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const ReviewItem = ({ review }) => {
  return (
    <div className="review" key={review.id}>
      <div className="review_header">
        <div className="review_header-details">
          <img src={review.user.profileImage ?? imagePlaceholder} alt="" />
          <div>
            <p className="name">{review.user.username}</p>
            <p>
              <Ratings rating={review.rating} />
            </p>
          </div>
        </div>
        <div className="review_header-date">
          <p>
            {new Date(review.created_at ?? 1680526717394).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              }
            )}
          </p>
          <p>{timeAgo.format(review.created_at ?? 1680526717394)}</p>
        </div>
      </div>
      {/* <h4>{review.title}</h4> */}
      <p>{review.description}</p>
    </div>
  );
};

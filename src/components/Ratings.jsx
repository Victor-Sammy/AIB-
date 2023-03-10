import React from "react";
import Star from "./vectors/Star";
import StarHalf from "./vectors/StarHalf";
import StarOutline from "./vectors/StarOutline";

const Ratings = ({ rating, color = "#FE8946" }) => {
  return (
    <>
      {Array(Math.floor(rating))
        .fill(0)
        .map((item) => (
          <Star fill={color} />
        ))}
      {rating % 1 !== 0 && <StarHalf fill={color} />}
      {Array(5 - Math.ceil(rating))
        .fill(0)
        .map((item) => (
          <Star fill={"#DADADA"} />
        ))}
    </>
  );
};

Ratings.defaultProps = {
  color: "#ffa41c",
};
export default Ratings;

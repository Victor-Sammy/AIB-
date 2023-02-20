import { useQuery } from "@tanstack/react-query";
import React from "react";
import Heart from "../vectors/Heart";
import { getUserLikedItems } from "../../Api/user.js";
import "./style.scss";
import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  const { data: likedItems } = useQuery({
    queryKey: ["userLikedItems"],
    queryFn: getUserLikedItems,
  });

  return (
    <div className="productItem">
      <div className="productItem-heart">
        {likedItems?.[item.id] ? (
          <Heart fill="#EB5757" stroke="#EB5757" />
        ) : (
          <Heart />
        )}
      </div>
      <div className="productItem-image">
        <img src={item.images[0].image} alt={`${item.name}`} />
      </div>
      <Link to="/" className="productItem-content">
        <div className="productItem-content-category">
          {item.category ?? "Bliss Fashion"}
        </div>
        <div className="productItem-content-name">{item.name}</div>
        <div className="productItem-content-price">
          NGN {item.price.toLocaleString()}
        </div>
        <div className="productItem-content-rating">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="rating">5.0</span>
          <span className="ratingCount">(34k)</span>
        </div>
      </Link>
    </div>
  );
}

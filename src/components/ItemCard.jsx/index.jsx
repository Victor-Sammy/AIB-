import { useQuery } from "@tanstack/react-query";
import React from "react";
import Heart from "../vectors/Heart";
import { getUserLikedItems } from "../../Api/user.js";
import "./style.scss";

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
      <div className="productItem-content">{item.name}</div>
    </div>
  );
}

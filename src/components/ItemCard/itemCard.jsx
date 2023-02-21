import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import Heart from "../vectors/Heart";
import { getUserLikedItems, toggleItemLike } from "../../Api/user.js";
import "./style.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function ItemCard({ item }) {
  const queryClient = useQueryClient();

  const { data: likedItems } = useQuery({
    queryKey: ["userLikedItems"],
    queryFn: getUserLikedItems,
  });

  // Mutations
  const { mutate: toggleLike } = useMutation({
    mutationFn: ({ id, add }) => toggleItemLike(id),
    onMutate: ({ id, add }) => {
      // Snapshot the previous value
      const previousLikedItems = queryClient.getQueryData(["userLikedItems"]);

      const likedItems = { ...previousLikedItems };

      if (add) {
        likedItems[`${id}`] = item;
      } else {
        delete likedItems[`${id}`];
      }

      // Optimistically update to the new value
      queryClient.setQueryData(["userLikedItems"], likedItems);

      return { previousLikedItems };
    },
    onSuccess: (data, variables, context) => {
      toast.success(
        `${item.name} successfully ${
          variables.add ? "added to" : "removed from"
        } favourites`
      );
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["userLikedItems"], context.previousLikedItems);
      toast.error(
        `Error ${
          variables.add
            ? `adding ${item.name} to`
            : `removing ${item.name} from`
        } favourites`
      );
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["userLikedItems"] });
    },
  });

  return (
    <div className="productItem">
      <div className="productItem-heart">
        {likedItems?.[item.id] ? (
          <Heart
            fill="#EB5757"
            stroke="#EB5757"
            onClick={() => toggleLike({ id: item.id, add: false })}
          />
        ) : (
          <Heart onClick={() => toggleLike({ id: item.id, add: true })} />
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

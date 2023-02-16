import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useRef } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { getPreviewProducts } from "../../Api/products";
import Button from "../Button";
import ItemCard from "../itemCard.jsx";
import "./style.scss";

export default function CategoryPreview({
  title,
  slug,
  requestPath,
  fullListPath,
}) {
  const navigate = useNavigate();
  const count = useRef(0);

  const { data: productList, isLoading } = useQuery({
    queryKey: [`${slug} preview`],
    queryFn: () => getPreviewProducts(requestPath),
  });

  return (
    <div className="preview">
      <div className="preview-header">
        <h2>{title}</h2>
        <Button
          text="See All"
          iconRight={<BsArrowRightShort />}
          onClick={(e) => navigate(fullListPath)}
        />
      </div>

      {isLoading ? (
        <div className="preview-itemsLoader">{}</div>
      ) : (
        <div className="preview-items">
          {productList.data.results
            .filter((item) => item.images.length > 0)
            .slice(0, 5)
            .map((item) => (
              <ItemCard item={item} />
            ))}
          {}
        </div>
      )}
    </div>
  );
}

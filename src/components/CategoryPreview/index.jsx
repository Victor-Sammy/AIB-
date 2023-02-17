import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useRef } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { getPreviewProducts } from "../../Api/products";
import Button from "../Button";
import ItemCard from "../itemCard";
import "./style.scss";

export default function CategoryPreview({
  title,
  slug,
  requestPath,
  fullListPath,
  className = "",
}) {
  const navigate = useNavigate();
  const count = useRef(0);

  const { data: productList, isLoading } = useQuery({
    queryKey: [`${slug} preview`],
    queryFn: () => getPreviewProducts(requestPath),
  });

  return (
    <div className={`preview ${className}`}>
      {isLoading ? (
        <>
          <div className="preview-loading-header">
            <div className="h2"></div>
            <div className="button"></div>
          </div>

          <div className="preview-loading-items">
            {Array(5)
              .fill(0)
              .map((item) => (
                <div className="item"></div>
              ))}
            {}
          </div>
        </>
      ) : (
        <>
          <div className="preview-header">
            <h2>{title}</h2>
            <Button
              text="See All"
              iconRight={<BsArrowRightShort />}
              onClick={(e) => navigate(fullListPath)}
            />
          </div>

          <div className="preview-items">
            {productList.data.results
              .filter((item) => item.images.length > 0)
              .slice(0, 5)
              .map((item) => (
                <ItemCard item={item} />
              ))}
            {}
          </div>
        </>
      )}
    </div>
  );
}

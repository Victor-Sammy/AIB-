import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { getPreviewProducts } from "../../../Api/products";
import Button from "../Button";
import "./style.scss";

export default function CategoryPreview({
  title,
  slug,
  requestPath,
  fullListPath,
}) {
  const navigate = useNavigate();

  const productList = useQuery({
    queryKey: [`${slug} preview`],
    queryFn: () => getPreviewProducts(todoId),
  });

  console.log("productList", productList.data.results);

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
    </div>
  );
}

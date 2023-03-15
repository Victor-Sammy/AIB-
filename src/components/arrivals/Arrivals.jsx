import React, { useRef } from "react";
import "../../sass/pages/_home.scss";
import { BsArrowRightShort } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Button from "../Button";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ItemCard from "../ItemCard/itemCard";
import { getPreviewProducts } from "../../Api/products";
import "./style.scss";

const Arrivals = () => {
  const navigate = useNavigate();
  const scrollRef = useRef();

  const {
    data: productList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [`new arrivals preview`],
    queryFn: () => getPreviewProducts("/ad/trending/"),
  });

  if (isError) {
    return <div>Error loading products</div>;
  }

  const slideLt = () => {
    var slider = scrollRef.current;
    slider.scrollLeft = slider.scrollLeft - 250;
  };
  const slideRt = () => {
    var slider = scrollRef.current;
    slider.scrollLeft = slider.scrollLeft + 250;
  };

  return (
    <div className={`arivalsPreview`}>
      {isLoading ? (
        <>
          <div className="arivalsPreview-loading-header">
            <div className="h2"></div>
            <div className="button"></div>
          </div>

          <div className="arivalsPreview-loading-items">
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <div className="item" key={index}></div>
              ))}
            {}
          </div>
        </>
      ) : (
        <>
          <div className="arivalsPreview-header">
            <h2>New Arrivals</h2>
            <Button
              text="See All"
              iconRight={<BsArrowRightShort />}
              onClick={(e) => navigate(fullListPath)}
            />
          </div>

          <div className="arivalsPreview-wrap">
            {productList.data.results.length > 5 && (
              <div className="arivalsPreview-scroll">
                <div className="left-arrw" onClick={slideLt}>
                  <MdChevronLeft />
                </div>
                <div className="right-arrw" onClick={slideRt}>
                  <MdChevronRight />
                </div>
              </div>
            )}
            <div className="arivalsPreview-items" ref={scrollRef}>
              {productList.data.results
                // .filter((item) => item.images.length > 0)
                // .slice(0, 5)
                .map((item) => (
                  <ItemCard item={item} key={item.id} />
                ))}
              {}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Arrivals;

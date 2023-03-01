import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as BaseCarousel } from "react-responsive-carousel";
import ArrowRight from "../vectors/ArrowRight";
import ArrowLeft from "../vectors/ArrowLeft";
import "../../sass/pages/_productDetails.scss";

export default function Carousel({ images }) {
  const [currentSlide, setcurrentSlide] = useState(0);

  const carouselPrev = () => {
    setcurrentSlide((index) => index - 1);
  };

  const carouselNext = () => {
    setcurrentSlide((index) => index + 1);
  };
  const setCarouselIndex = (index) => {
    setcurrentSlide(index);
  };

  return (
    <div className="productDetails_carousel">
      <div className="productDetails_carousel-main">
        <BaseCarousel
          showStatus={false}
          showIndicators={false}
          showArrows={false}
          showThumbs={false}
          selectedItem={currentSlide}
          autoPlay={true}
          infiniteLoop={true}
          interval={4000}
          onChange={(index) => setCarouselIndex(index)}
        >
          {images.map((image, index) => {
            return (
              <div className="productDetails_carousel-item" key={index}>
                <img src={image} />
              </div>
            );
          })}
        </BaseCarousel>
        <div className="productDetails_carousel-controls">
          <button onClick={carouselPrev} disabled={currentSlide == 0}>
            <ArrowLeft />
          </button>
          <button
            onClick={carouselNext}
            disabled={currentSlide == images.length - 1}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="productDetails_carousel-thumbs">
        {images.map((image, index) => {
          return (
            <div
              className={`thumb ${currentSlide == index ? "active" : ""}`}
              onClick={() => setcurrentSlide(index)}
              key={index}
            >
              <img src={image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

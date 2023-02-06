import React from "react";
import "../../sass/components/_productGallery.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductGallery = ({ gallery }) => {
  return (
    <div>
      <Carousel className="main-slide">
        {gallery?.map((photo) => {
          return (
            <div>
              <img src={photo.image} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProductGallery;

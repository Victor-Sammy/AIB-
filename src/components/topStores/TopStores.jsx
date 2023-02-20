import React, { useEffect, useRef, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import levisLogo from "../../assets/levisLogo.png";
import pumaLogo from "../../assets/pumaLogo.png";
import hpLogo from "../../assets/hpLogo.png";
import centsOnlyLogo from "../../assets/centsOnlyLogo.png";
import clairesLogo from "../../assets/clairesLogo.png";
import shopeeLogo from "../../assets/shopeeLogo.png";
import disneyLogo from "../../assets/disneyLogo.png";
import danyFashionLogo from "../../assets/danyFashionLogo.png";
import "../CategoryPreview/style.scss";
import Button from "../Button";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const storeList = [
  {
    id: 1,
    name: "Levis",
    image: levisLogo,
    fullPath: "/",
  },
  {
    id: 2,
    name: "Puma",
    image: pumaLogo,
    fullPath: "/",
  },
  {
    id: 3,
    name: "HP",
    image: hpLogo,
    fullPath: "/",
  },
  {
    id: 4,
    name: "99 Cents",
    image: centsOnlyLogo,
    fullPath: "/",
  },
  {
    id: 5,
    name: "Claire's",
    image: clairesLogo,
    fullPath: "/",
  },
  {
    id: 6,
    name: "Shopee",
    image: shopeeLogo,
    fullPath: "/",
  },
  {
    id: 7,
    name: "Disney",
    image: disneyLogo,
    fullPath: "/",
  },
  {
    id: 8,
    name: "Danny Fashion",
    image: danyFashionLogo,
    fullPath: "/",
  },
];

const TopStores = () => {
  const scrollRef = useRef();

  const slideLt = () => {
    var slider = scrollRef.current;
    slider.scrollLeft = slider.scrollLeft - 250;
  };
  const slideRt = () => {
    var slider = scrollRef.current;
    slider.scrollLeft = slider.scrollLeft + 250;
  };

  return (
    <div className="preview">
      {/* {isLoading ? (
        <>
          <div className="preview-loading-header">
            <div className="h2"></div>
            <div className="button"></div>
          </div>

          <div className="preview-loading-logoItems">
            {Array(8)
              .fill(0)
              .map((item) => (
                <div className="logoItem"></div>
              ))}
            {}
          </div>
        </>
      ) : ( */}
      <>
        <div className="preview-header">
          <h2>Top Stores</h2>
          <Button
            text="See All"
            iconRight={<BsArrowRightShort />}
            onClick={(e) => navigate("/")}
          />
        </div>

        <div className="preview-wrap">
          <div className="preview-scroll">
            <div className="left-arrw" onClick={slideLt}>
              <MdChevronLeft />
            </div>
            <div className="right-arrw" onClick={slideRt}>
              <MdChevronRight />
            </div>
          </div>
          <div className="preview-storeItems" ref={scrollRef}>
            {storeList.map((store) => (
              <Link to="/" key={store.id} className="storeItem">
                <img src={store.image} alt={`${store.name} logo`} />
              </Link>
            ))}
          </div>
        </div>
      </>
      {/* )} */}
    </div>
    // <section className='top-stores'>
    //   <div className='stores-header'>
    //     <div className='stores-title' id='title'>
    //       Top Stores
    //     </div>
    //     <div className='stores-btn'>
    //       <div className='btn-store'>See All</div>
    //       <div className='arrw-ic'>
    //         <BsArrowRightShort />
    //       </div>
    //     </div>
    //   </div>

    //   <div className='stores-display'>
    //     {storeLogo.map((item) => {
    //       return (
    //         <div className='store-logo'>
    //           <Link to=''>
    //             <img src={item.image} alt='' />
    //           </Link>
    //         </div>
    //       )
    //     })}
    //   </div>
    // </section>
  );
};

export default TopStores;

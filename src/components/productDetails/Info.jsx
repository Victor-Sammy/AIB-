import React, { useLayoutEffect, useRef, useState } from "react";
import "../../sass/pages/_productDetails.scss";

export default function Info() {
  const [selected, setSelected] = useState("details");

  const selectItem = (e, item) => {
    const itemElement = e.currentTarget;
    setSelected(item);
    let left =
      itemElement.getBoundingClientRect().left -
      navWrapRef.current.getBoundingClientRect().left;
    let width = itemElement.offsetWidth;

    activeNavBacground.current.style.left = `${left}px`;
    activeNavBacground.current.style.width = `${width}px`;
  };

  const navItemRefs = useRef([]);
  const activeNavBacground = useRef();
  const navWrapRef = useRef();

  useLayoutEffect(() => {
    const itemElement = navItemRefs.current.find((element) =>
      element.classList.contains("active")
    );
    console.log(itemElement);
    let left =
      itemElement.getBoundingClientRect().left -
      navWrapRef.current.getBoundingClientRect().left;
    let width = itemElement.offsetWidth;

    activeNavBacground.current.style.left = `${left}px`;
    activeNavBacground.current.style.width = `${width}px`;
  }, []);

  return (
    <div className="productDetails_info">
      <div className="productDetails_info-header" ref={navWrapRef}>
        <span
          ref={activeNavBacground}
          className="productDetails_info-header-highlight"
        ></span>
        <button
          ref={(ref) => (navItemRefs.current[0] = ref)}
          onClick={(e) => selectItem(e, "detials")}
          className={`productDetails_info-header-button ${
            selected === "details" ? "active" : ""
          }`}
        >
          Details
        </button>
        <button
          ref={(ref) => (navItemRefs.current[1] = ref)}
          onClick={(e) => selectItem(e, "specifications")}
          className={`productDetails_info-header-button ${
            selected === "specifications" ? "active" : ""
          }`}
        >
          Specifications
        </button>
      </div>
    </div>
  );
}

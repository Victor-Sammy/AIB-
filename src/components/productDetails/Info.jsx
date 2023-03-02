import React, { useLayoutEffect, useRef, useState } from "react";
import Button from "../Button";

export default function Info() {
  const [selected, setSelected] = useState("Detials");

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
      element.querySelector("button").classList.contains("active")
    );
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
          className="productDetails__info-header-highlight"
        ></span>
        {["Details", "Specification"].map((item, index) => (
          <span key={index} ref={(ref) => (navItemRefs.current[index] = ref)}>
            <Button
              text={item}
              onClick={(e) => selectItem(e, item)}
              className={`productDetails__info-header-button ${
                selected === item ? "active" : ""
              }`}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

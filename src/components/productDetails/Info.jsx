import React, { useLayoutEffect, useRef, useState } from "react";
import "../../sass/pages/_productDetails.scss";

export default function Info({ productDetails, productSpecifications }) {
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

  const splitedProudctDetails = [];
  const splitedProductSpecifications = [];

  let arr = [];
  productDetails.forEach((property, index) => {
    arr.push(property);
    if (index % 3 == 2 || index == productDetails.length - 1) {
      splitedProudctDetails.push(arr);
      arr = [];
    }
  });

  arr = [];
  productSpecifications.forEach((property, index) => {
    arr.push(property);
    if (index % 3 == 2 || index == productSpecifications.length - 1) {
      splitedProductSpecifications.push(arr);
      arr = [];
    }
  });

  useLayoutEffect(() => {
    const itemElement = navItemRefs.current.find((element) =>
      element.classList.contains("active")
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
          className="productDetails_info-header-highlight"
        ></span>
        <button
          ref={(ref) => (navItemRefs.current[0] = ref)}
          onClick={(e) => selectItem(e, "details")}
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
      {selected == "details" ? (
        <table className="productDetails_info-content">
          <tbody>
            {splitedProudctDetails.map((productDetailsGroup, index) => (
              <tr className="detailRow" key={index}>
                {productDetailsGroup.map((productDetail) => (
                  <td className="detailData" key={productDetail.name}>
                    <div className="detailData_title">
                      {productDetail.name.toUpperCase()}
                    </div>
                    <div className="detailData_value">
                      {productDetail.value}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="productDetails_info-content">
          <tbody>
            {splitedProductSpecifications.map(
              (productSpecificationsGroup, index) => (
                <tr className="detailRow" key={index}>
                  {productSpecificationsGroup.map((productSpec) => (
                    <td className="detailData" key={productSpec.name}>
                      <div className="detailData_title">
                        {productSpec.name.toUpperCase()}
                      </div>
                      <div className="detailData_value">
                        {productSpec.value}
                      </div>
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

import { useMemo } from "react";
import "../../sass/pages/_productDetails.scss";

export default function Info({ productDetails }) {
  const splitedProudctDetails = useMemo(() => {
    const splitedProudctDetails = [];
    let arr = [];
    productDetails.forEach((property, index) => {
      arr.push(property);
      if (index % 3 == 2 || index == productDetails.length - 1) {
        splitedProudctDetails.push(arr);
        arr = [];
      }
    });

    return splitedProudctDetails;
  }, [productDetails]);

  if (productDetails.length < 1) return;

  return (
    <div className="productDetails_info">
      <div className="productDetails_info-header">
        <button className={"productDetails_info-header-button"}>Details</button>
      </div>
      <table className="productDetails_info-content">
        <tbody>
          {splitedProudctDetails.map((productDetailsGroup, index) => (
            <tr className="detailRow" key={index}>
              {productDetailsGroup.map((productDetail) => (
                <td className="detailData" key={productDetail.name}>
                  <div className="detailData_title">
                    {productDetail.name.toUpperCase()}
                  </div>
                  <div className="detailData_value">{productDetail.value}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

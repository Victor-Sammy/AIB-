import React, { useEffect, useRef, useState } from "react";
import "../../sass/pages/_productDetails.scss";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../Api/products";
import { useQuery } from "@tanstack/react-query";
import iphone1 from "../../assets/iphone1.png";
import iphone2 from "../../assets/iphone2.png";
import iphone3 from "../../assets/iphone3.png";
import iphone4 from "../../assets/iphone4.png";
import Carousel from "./Carousel";
import Ratings from "../Ratings";
import OptionSelector from "./OptionSelector";
import Cart from "../vectors/Cart";
import Info from "./info";
import RatingsAndReviews from "./RatingsAndReviews";

const formatter = Intl.NumberFormat("en", { notation: "compact" });

const productDetails = {
  images: [iphone1, iphone2, iphone3, iphone4],
  name: "Apple iPhone 13 pro",
  description:
    "6.1 Inch Super Retina - (6GB RAM + 256GB ROM) IOS 15, 5G, FaceTime - GOLD",
  price: 850000,
  ratings: {
    average: 3.5,
    count: 3400,
    details: {
      5: 2000,
      4: 800,
      3: 400,
      2: 150,
      1: 50,
    },
  },
  options: [
    {
      name: "Capacity",
      options: [
        {
          value: "64GB",
          additionalPrice: 6000,
        },
        {
          value: "128GB",
          additionalPrice: 50000,
        },
        {
          value: "256GB",
          additionalPrice: 80000,
        },
        {
          value: "512GB",
          additionalPrice: 120000,
        },
        {
          value: "1TB",
          additionalPrice: 210000,
        },
      ],
    },
    {
      name: "Color",
      options: [
        {
          value: "Blue",
          additionalPrice: 0,
        },
        {
          value: "Red",
          additionalPrice: 3000,
        },
      ],
    },
  ],
  details: [
    {
      name: "Brand",
      value: "Apple",
    },
    {
      name: "Display Type",
      value: "OLED",
    },
    {
      name: "Internal Storage",
      value: "256GB",
    },
    {
      name: "Model",
      value: "Iphone 13 Pro",
    },
    {
      name: "Screen Size",
      value: "6.1",
    },
    {
      name: "Card Slot",
      value: "No",
    },
    {
      name: "Condition",
      value: "Brand New",
    },
    {
      name: "Resolution",
      value: "1125 x 2436",
    },
    {
      name: "Main Camera",
      value: "Triple",
    },
    {
      name: "SIM",
      value: "Nano-SIM",
    },
    {
      name: "RAM",
      value: "3GB",
    },
    {
      name: "Selfie Camera",
      value: "12MP (f/2.2)",
    },
    {
      name: "OS",
      value: "IOS",
    },
    {
      name: "Colour",
      value: "Others",
    },
    {
      name: "Battery",
      value: "3190mAh",
    },
  ],
  specifications: [
    {
      name: "Card Slot",
      value: "No",
    },
    {
      name: "Condition",
      value: "Brand New",
    },
    {
      name: "Resolution",
      value: "1125 x 2436",
    },
    {
      name: "Main Camera",
      value: "Triple",
    },
    {
      name: "SIM",
      value: "Nano-SIM",
    },
    {
      name: "RAM",
      value: "3GB",
    },
    {
      name: "Selfie Camera",
      value: "12MP (f/2.2)",
    },
    {
      name: "OS",
      value: "IOS",
    },
    {
      name: "Colour",
      value: "Others",
    },
    {
      name: "Battery",
      value: "3190mAh",
    },
  ],
};

const ProductDetails = () => {
  const { id } = useParams();
  const [price, setPrice] = useState(0);
  const selectedOptions = useRef([]);

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductDetails(id),
  });

  const selectOption = (index, value) => {
    const prevAdditionalPrice =
      selectedOptions.current[index].option.additionalPrice;
    selectedOptions.current[index].option = value;
    setPrice(
      (price) =>
        price + Number(value.additionalPrice) - Number(prevAdditionalPrice)
    );
  };

  useEffect(() => {
    const price = productDetails.options.reduce(
      (previousValue, variant) =>
        previousValue + variant.options[0].additionalPrice,
      productDetails.price
    );
    productDetails.options.forEach((variant) => {
      selectedOptions.current.push({
        name: variant.name,
        option: variant.options[0],
      });
    });
    setPrice(price);
  }, [productDetails]);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <main className=" wrapper productDetails">
      <Carousel images={productDetails.images} />
      <div className="productDetails_details">
        <h1 className="productDetails_details-name">{productDetails.name}</h1>
        <p className="productDetails_details-description">
          {productDetails.description}
        </p>
        <p className="productDetails_details-price">
          NGN{price.toLocaleString()}
        </p>
        <div className="productDetails_details-rating">
          <span className="stars">
            <Ratings rating={productDetails.ratings.average} color="#FE8946" />
          </span>
          <span className="rating">{productDetails.ratings.average}</span>
          <span className="ratingCount">
            ({formatter.format(productDetails.ratings.count)})
          </span>
        </div>
      </div>
      <OptionSelector
        options={productDetails.options}
        selectOption={selectOption}
        ref={selectedOptions}
      />
      <div className="productDetails_cta">
        <button className="productDetails_cta-cart">
          <Cart /> Add to Cart
        </button>
        <button className="productDetails_cta-buy">Buy</button>
      </div>

      <Info
        productDetails={productDetails.details}
        productSpecifications={productDetails.specifications}
      />
      <RatingsAndReviews id={id} ratings={productDetails.ratings} />
    </main>
  );
};

{
  /* <i
  style={{ color }}
  className={
    value + 1 === rate + 0.5
      ? "fa-solid fa-star-half-alt"
      : value >= rate
      ? "fa-solid fa-star"
      : "far fa-star"
  }
></i>; */
}

// const Product = () => {
//   const { id } = useParams();
//   // const [productDetails, setProductDetails] = useState([]);
//   // const [loading, setLoading] = useState(true);
//   const [details, setDetails] = useState(true);
//   const [addToWishlist, setAddToWishlist] = useState(false);

//   //const dispatch = useDispatch()

//   // axios.defaults.withCredentials = true;

//   const { data: product, isLoading } = useQuery({
//     queryKey: ["product", id],
//     queryFn: () => getProductDetails(id),
//   });

//   const productDetails = product?.data;

//   console.log("product", product);

//   const handleClick = () => {
//     console.log(productDetails.id);
//     localStorage.setItem("cartProduct", JSON.stringify(productDetails));
//     localStorage.setItem("ProductID", JSON.stringify(productDetails.id));
//     // axios
//     //   .post(
//     //     `${API_URL}/ad/carts/343b6ac4-34fe-4ee6-a608-e1bdaaf61f69/items/`,
//     //     {productDetails}
//     //   )
//     const cartId = localStorage.getItem("cartID");
//     const requestOptions = {
//       method: "POST",
//       body: JSON.stringify({ product_id: productDetails.id, quantity: 1 }),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     fetch(`${API_URL}/ad/carts/${cartId}/items/`, requestOptions)
//       .then((res) => {
//         console.log(res.status, res.data);
//         localStorage.setItem("qty", 1);
//         if (res.status === 415) {
//           console.log(res.data, res.message);
//         }
//         //navigate('/addProducts')
//       })
//       .catch((error) => {
//         console.log(error.response, error.message);
//       });
//   };

//   const optRef = useRef(null);
//   const toggleOpt = () => optRef.current.classList.toggle("active__btnClass");
//   useEffect(() => {
//     const getProduct = async () => {
//       const response = await fetch(`${API_URL}/ad/products/${id}`);
//       const data = await response.json();
//       setProductDetails(data);
//       setLoading(false);
//       console.log(data);
//     };
//     getProduct();
//   }, [id]);

//   if (isLoading) {
//     return <>Loading...</>;
//   }

//   return (
//     <section className="product">
//       <div className="back-to-prdt">
//         <div className="back-icon">
//           <RiArrowLeftSLine />
//         </div>
//         <div className="prdt-text">Back to Products</div>
//       </div>

//       <div className="prdt-details">
//         <div>
//           <div className="image-gallery">
//             <ProductGallery gallery={productDetails.images} />
//           </div>
//           <div className="review">
//             <Review id={id} />
//           </div>
//         </div>
//         <div className="prdt-info">
//           <div className="prdt-title">{productDetails.name}</div>
//           <div className="prdt-des"></div>
//           <div className="prdt-price">NGN {productDetails.price}</div>
//           <div className="product-btns">
//             <div className="cart-btn">
//               <div className="cart-icon">
//                 <svg
//                   width="25"
//                   height="24"
//                   viewBox="0 0 25 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M2.5 2H4.24001C5.32001 2 6.17 2.93 6.08 4L5.25 13.96C5.11 15.59 6.39999 16.99 8.03999 16.99H18.69C20.13 16.99 21.39 15.81 21.5 14.38L22.04 6.88C22.16 5.22 20.9 3.87 19.23 3.87H6.32001"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeMiterlimit="10"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M16.75 22C17.4404 22 18 21.4404 18 20.75C18 20.0596 17.4404 19.5 16.75 19.5C16.0596 19.5 15.5 20.0596 15.5 20.75C15.5 21.4404 16.0596 22 16.75 22Z"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeMiterlimit="10"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M8.75 22C9.44036 22 10 21.4404 10 20.75C10 20.0596 9.44036 19.5 8.75 19.5C8.05964 19.5 7.5 20.0596 7.5 20.75C7.5 21.4404 8.05964 22 8.75 22Z"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeMiterlimit="10"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M9.5 8H21.5"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeMiterlimit="10"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//               <div className="cart-text" onClick={handleClick}>
//                 Add to Cart
//               </div>
//             </div>
//             <div className="buy-btn">Buy</div>
//           </div>
//           <div className="prod-rating">
//             <h2>5.0</h2>
//             <p>(34k)</p>
//           </div>
//           <h1>Capacity</h1>
//           <div className="capacity">
//             <div className="capacity-btn">
//               {buttons.map((btn, index) => (
//                 <NavLink to="#" key={index} ref={optRef} onClick={toggleOpt}>
//                   {btn.display}
//                 </NavLink>
//               ))}
//             </div>
//           </div>
//           <hr className="details-line" />
//           <div>
//             <div className="details-box">
//               <div className="details-card">
//                 <div
//                   className="details-header"
//                   onClick={() => setDetails(true)}
//                 >
//                   Details
//                 </div>
//                 {!!details && <div className="det-btn"></div>}
//               </div>
//               <div className="specs">
//                 <div className="specs-header" onClick={() => setDetails(false)}>
//                   Specifications
//                 </div>
//                 {!details && <div className="spec-btn"></div>}
//               </div>
//             </div>
//             {details ? (
//               <Details product={productDetails} />
//             ) : (
//               <Specs product={productDetails} />
//             )}
//           </div>
//         </div>
//         <div className="wish-icon">
//           <AiOutlineHeart
//             key=""
//             onClick={() => setAddToWishlist(!addToWishlist)}
//             className={`wish-icn ${addToWishlist ? "wish-active" : ""}`}
//           />
//         </div>
//       </div>
//       <Similar />
//     </section>
//   );
//   // const ShowProduct = () => {
//   // }
//   // return (
//   //   <section className='product'>
//   //     <div>{loading ? <Loading /> : <ShowProduct />}</div>
//   //   </section>
//   // )
// };

export default ProductDetails;

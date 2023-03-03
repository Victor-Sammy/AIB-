import React, { useEffect, useRef, useState } from "react";
import "../../sass/pages/_productDetails.scss";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../Api/products";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import iphone1 from "../../assets/iphone1.png";
import iphone2 from "../../assets/iphone2.png";
import iphone3 from "../../assets/iphone3.png";
import iphone4 from "../../assets/iphone4.png";
import Carousel from "./Carousel.jsx";
import Ratings from "../Ratings.jsx";
import OptionSelector from "./OptionSelector.jsx";
import Cart from "../vectors/Cart.jsx";
import Info from "./Info.jsx";
import RatingsAndReviews from "./RatingsAndReviews.jsx";
import CategoryPreview from "../CategoryPreview";
import { getUserLikedItems, toggleItemLike } from "../../Api/user";
import { toast } from "react-toastify";
import Heart from "../vectors/Heart.jsx";

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
  const queryClient = useQueryClient();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductDetails(id),
  });

  const { data: likedItems } = useQuery({
    queryKey: ["userLikedItems"],
    queryFn: getUserLikedItems,
  });

  // Mutations
  const { mutate: toggleLike } = useMutation({
    mutationFn: ({ id, add }) => toggleItemLike(id),
    onMutate: ({ id, add }) => {
      // Snapshot the previous value
      const previousLikedItems = queryClient.getQueryData(["userLikedItems"]);

      const likedItems = { ...previousLikedItems };

      if (add) {
        likedItems[`${id}`] = productDetails;
      } else {
        delete likedItems[`${id}`];
      }

      // Optimistically update to the new value
      queryClient.setQueryData(["userLikedItems"], likedItems);

      return { previousLikedItems };
    },
    onSuccess: (data, variables, context) => {
      toast.success(
        `${productDetails.name} successfully ${
          variables.add ? "added to" : "removed from"
        } favourites`
      );
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["userLikedItems"], context.previousLikedItems);
      toast.error(
        `Error ${
          variables.add
            ? `adding ${productDetails.name} to`
            : `removing ${productDetails.name} from`
        } favourites`
      );
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["userLikedItems"] });
    },
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
        <div className="productDetails_details-nameWrap">
          <h1 className="productDetails_details-name">{productDetails.name}</h1>
          <div>
            {likedItems?.[id] ? (
              <Heart
                fill="#EB5757"
                stroke="#EB5757"
                onClick={() => toggleLike({ id, add: false })}
              />
            ) : (
              <Heart onClick={() => toggleLike({ id, add: true })} />
            )}
          </div>
        </div>
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

      <CategoryPreview
        slug="similarproducts"
        title="Similar Products"
        requestPath="/ad/trending/"
        fullListPath="/"
        className="similarProductsPreview"
      />
    </main>
  );
};

export default ProductDetails;

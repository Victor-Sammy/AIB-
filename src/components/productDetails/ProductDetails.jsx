import React, { useEffect, useRef, useState } from "react";
import "../../sass/pages/_productDetails.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getProductDetails, toggleItemLike } from "../../Api/products";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import iphone1 from "../../assets/iphone1.png";
import iphone2 from "../../assets/iphone2.png";
import iphone3 from "../../assets/iphone3.png";
import iphone4 from "../../assets/iphone4.png";
import Carousel from "./Carousel.jsx";
import Ratings from "../Ratings.jsx";
// import OptionSelector from "./OptionSelector.jsx";
import Cart from "../vectors/Cart.jsx";
import Info from "./Info.jsx";
import RatingsAndReviews from "./RatingsAndReviews.jsx";
import CategoryPreview from "../CategoryPreview";
import { getUserLikedItems } from "../../Api/user";
import { toast } from "react-toastify";
import Heart from "../vectors/Heart.jsx";
import ArrowLeft from "../vectors/ArrowLeft";
import { useAuth } from "../../context/AuthContext";
import { addToCart } from "../../Api/cart";
import LoadingSpinner from "../vectors/LoadingSpinner";
import { useMemo } from "react";

const formatter = Intl.NumberFormat("en", { notation: "compact" });

const ProductDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  let location = useLocation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductDetails(id),
  });

  console.log("Product", product);

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
        likedItems.results.push(item);
      } else {
        likedItems.results = likedItems.results.filter(
          (likedItem) => likedItem.id !== item.id
        );
      }

      // Optimistically update to the new value
      queryClient.setQueryData(["userLikedItems"], likedItems);

      return { previousLikedItems };
    },
    onSuccess: (data, variables, context) => {
      toast.success(
        `${item.name} successfully ${
          variables.add ? "added to" : "removed from"
        } favourites`
      );
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["userLikedItems"], context.previousLikedItems);
      toast.error(
        `Error ${
          variables.add
            ? `adding ${item.name} to`
            : `removing ${item.name} from`
        } favourites`
      );
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["userLikedItems"] });
    },
  });

  const { mutate: addProductToCart, isLoading: addingProductToCart } =
    useMutation({
      mutationFn: (id) => addToCart(id),
      onSuccess: (data, variables, context) => {
        toast.success(`${product.name} successfully added to cart`);
      },
      onError: (err, newTodo, context) => {
        toast.error(`Error adding ${product.name} to cart`);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["cart"] });
      },
    });

  const toggleLikeHelper = (args) => {
    if (user) {
      toggleLike(args);
    } else {
      toast.error("Login to add items to your wishlist");
      navigate(`/signin?next=${location.pathname}`);
    }
  };

  const productDetails = useMemo(() => {
    const productDetails = [];
    const primaryKeys = [
      "id",
      "name",
      "description",
      "price",
      "rating_info",
      "images",
      "start_date",
      "created_at",
      "updated_at",
    ];
    if (product) {
      Object.entries(product).forEach(([key, value]) => {
        if (primaryKeys.includes(key) || !value) return;
        productDetails.push({
          name: key,
          value: JSON.stringify(value),
        });
      });
    }

    return productDetails;
  }, [product]);

  return (
    <main className=" wrapper productDetails">
      <div className="productDetails_back desktop" onClick={() => navigate(-1)}>
        <button>
          <ArrowLeft />
        </button>
        Back to Products
      </div>
      <div className="detailsWrap">
        {isLoading ? (
          <div className="productDetails_carouselLoading">
            <div className="productDetails_carouselLoading-main"></div>
            <div className="productDetails_carouselLoading-thumbs">
              <div className="loadingThumb"></div>
              <div className="loadingThumb"></div>
              <div className="loadingThumb"></div>
              <div className="loadingThumb"></div>
            </div>
          </div>
        ) : (
          <Carousel
            images={product.images.map((imageObject) => imageObject.image)}
          />
        )}
        <div className="productDetails_detailWrap">
          {isLoading ? (
            <div className="productDetails_detailsLoading">
              <div className="name"></div>
              <div className="description"></div>
              <div className="description2"></div>
              <div className="price"></div>
              <div className="ratings"></div>
            </div>
          ) : (
            <div className="productDetails_details">
              <div className="productDetails_details-nameWrap">
                <h1 className="productDetails_details-name">{product.name}</h1>
                <div>
                  {likedItems?.[id] ? (
                    <Heart
                      fill="#EB5757"
                      stroke="#EB5757"
                      onClick={() => toggleLikeHelper({ id, add: false })}
                    />
                  ) : (
                    <Heart
                      onClick={() => toggleLikeHelper({ id, add: true })}
                    />
                  )}
                </div>
              </div>
              <p className="productDetails_details-description">
                {product.description}
              </p>
              <p className="productDetails_details-price">
                NGN{product.price.toLocaleString()}
              </p>
              <div className="productDetails_details-rating">
                <span className="stars">
                  <Ratings
                    rating={product.rating_info.average}
                    color="#FE8946"
                  />
                </span>
                <span className="rating">{product.rating_info.average}</span>
                <span className="ratingCount">
                  ({formatter.format(product.rating_info.count)})
                </span>
              </div>
            </div>
          )}
          {/* {isLoading ? (
            <div className="productDetails_optionsLoading desktop">
              <div className="title"></div>
              <div className="options">
                <div className="option"></div>
                <div className="option"></div>
                <div className="option"></div>
                <div className="option"></div>
              </div>
            </div>
          ) : (
            <OptionSelector
              options={productDetails.options}
              selectOption={selectOption}
              ref={selectedOptions}
            />
          )} */}
          {!isLoading && (
            <div className="productDetails_cta">
              <button
                className="productDetails_cta-cart"
                onClick={() => addProductToCart(product.id)}
              >
                {addingProductToCart ? <LoadingSpinner /> : <Cart />} Add to
                Cart
              </button>
              <button className="productDetails_cta-buy">Buy</button>
            </div>
          )}
        </div>

        {!isLoading && (
          <>
            <Info productDetails={productDetails} />
            <RatingsAndReviews id={id} ratings={product.rating_info} />
          </>
        )}
      </div>

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

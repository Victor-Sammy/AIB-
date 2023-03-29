import React, { useEffect, useState } from "react";
import { BsArrowRightShort, BsCheck } from "react-icons/bs";
import "../../sass/pages/_shipping.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../Api/cart";
import Check from "../../components/vectors/Check";
import Input from "../../components/Input/input";
import CustomButton from "../../components/form-input/button.component";

const ShippingAddress = () => {
  const [shippingDetails, setShippingDetails] = useState({
    deliveryOption: "home delivery",
    email: "example@email.com",
    phone: "08023888552",
    address: "123 somewhere street, in some city",
    city: "Yaba",
    state: "Lagos State",
    zip: "100104",
  });

  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  console.log("cart", cart);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  if (isLoading) return;

  return (
    <section className="shipping">
      <div className="shipping_progress">
        <div className="shipping_progress-tab active">
          <span className="check">
            <Check />
          </span>
          <span className="title">Shipping details</span>
        </div>
        <div className="shipping_progress-tab">
          <span className="check">
            <Check />
          </span>
          <span className="title">Payment details</span>
        </div>
        <div className="shipping_progress-tab">
          <span className="check">
            <Check />
          </span>
          <span className="title">Successful</span>
        </div>
      </div>

      <div className="shipping_container">
        <div className="shipping_details">
          <div className="deliveryOption">
            <span className="label">Delivery Options</span>
            <label className="option">
              <input
                type="radio"
                name="delivery option"
                checked={shippingDetails.deliveryOption === "home delivery"}
                onChange={(e) =>
                  setShippingDetails((s) => ({
                    ...s,
                    deliveryOption: "home delivery",
                  }))
                }
              />
              <div className="check">
                <Check />
              </div>
              <span>Home Delivery</span>
            </label>
            <label>
              <input
                type="radio"
                name="delivery option"
                checked={shippingDetails.deliveryOption === "pick from point"}
                onChange={(e) =>
                  setShippingDetails((s) => ({
                    ...s,
                    deliveryOption: "pick from point",
                  }))
                }
              />
              <div className="check">
                <Check />
              </div>
              <span>Pick from point</span>
            </label>
          </div>
          <form action="">
            <Input
              placeholder="Email"
              value={shippingDetails.email}
              onChange={(e) =>
                setShippingDetails((s) => ({ ...s, email: e.target.value }))
              }
            />
            <Input
              placeholder="Phone number"
              value={shippingDetails.phone}
              onChange={(e) =>
                setShippingDetails((s) => ({ ...s, phone: e.target.value }))
              }
            />
            <Input
              placeholder="Address line"
              value={shippingDetails.address}
              onChange={(e) =>
                setShippingDetails((s) => ({ ...s, address: e.target.value }))
              }
            />
            <Input
              placeholder="City"
              value={shippingDetails.city}
              onChange={(e) =>
                setShippingDetails((s) => ({ ...s, city: e.target.value }))
              }
            />
            <div>
              <Input
                placeholder="State/Province/Region"
                value={shippingDetails.state}
                onChange={(e) =>
                  setShippingDetails((s) => ({ ...s, state: e.target.value }))
                }
              />
              <Input
                placeholder="State/Province/Region"
                value={shippingDetails.zip}
                onChange={(e) =>
                  setShippingDetails((s) => ({ ...s, zip: e.target.value }))
                }
              />
            </div>
          </form>
        </div>
        <CustomButton
          disabled={
            !(
              shippingDetails.deliveryOption &&
              shippingDetails.email &&
              shippingDetails.address &&
              shippingDetails.phone &&
              shippingDetails.city &&
              shippingDetails.state &&
              shippingDetails.zip
            )
          }
          loading={false}
          className="shipping_proceed"
        >
          Proceed to Payment
        </CustomButton>
        <div className="shipping_summary">
          <div className="shipping_summary-items">
            {cart.data.map(({ product, quantity, price }) => {
              return (
                <div className="productI">
                  <img
                    src={product.images[0]?.image}
                    alt=""
                    className="productI_image"
                  />
                  <div className="productI_details">
                    <p className="name">{product.name}</p>
                    <div className="description">{product.description}</div>
                  </div>
                  <div className="productI_value">
                    <p className="quantity">x {quantity}</p>
                    <p className="price">NGN{price.toLocaleString()}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="shipping_summary-total">
            <p className="title">Cart Summary</p>
            <div>
              <span>Subtotal</span>
              <span className="total">
                NGN
                {cart.data
                  .reduce((t, { price }) => t + price, 0)
                  .toLocaleString()}
                .00
              </span>
            </div>
            <p className="delivery">Deliveries fees not included.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingAddress;

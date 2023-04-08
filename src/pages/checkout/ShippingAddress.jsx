import React, { useEffect, useState } from "react";
import "../../sass/pages/_shipping.scss";
import { useQuery } from "@tanstack/react-query";
import {
  getCart,
  getOrder,
  getShippingAddress,
  postShippingAddress,
} from "../../Api/cart";
import Check from "../../components/vectors/Check.jsx";
import Input from "../../components/Input/Input.jsx";
import CustomButton from "../../components/form-input/button.component.jsx";
import { useAuth } from "../../context/AuthContext";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { client } from "../../Api/Api";

const ShippingAddress = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [shippingDetails, setShippingDetails] = useState({});
  // {
  //   delivery_option: "home delivery",
  //   email: "example@email.com",
  //   phone: "08023888552",
  //   address: "123 somewhere street, in some city",
  //   city: "Yaba",
  //   state: "Lagos State",
  //   zip: "100104",
  // }

  const { data: order, isLoading: isLoadingOrder } = useQuery({
    queryKey: ["order"],
    queryFn: getOrder,
  });

  console.log("order", order?.data[0].id);

  const config = {
    public_key: "FLWPUBK_TEST-aebfc91f2b5783e19dd54cff43b3fc8e-X",
    tx_ref: Date.now(),
    // amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    // customer: {
    //   email: "user@gmail.com",
    //   phone_number: "070********",
    //   name: "john doe",
    // },
    customizations: {
      title: "AIB Checkout",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
    meta: {
      order_id: order?.data[0].id,
    },
  };

  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  const handleFlutterPayment = useFlutterwave({
    ...config,
    amount: cart?.data.reduce((t, { price }) => t + price, 0) ?? 0,
    customer: {
      email: shippingDetails.email,
      phone_number: shippingDetails.phone,
      name: user.username,
    },
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    await postShippingAddress(shippingDetails);

    handleFlutterPayment({
      callback: async (response) => {
        // Set order payment status to successfull
        console.log(response);
        if (response.status === "successful") {
          client("");
          navigate("/order_success");
        }
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  };

  useEffect(() => {
    getShippingAddress().then((data) => setShippingDetails(data.data[0]));
  }, []);

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
                checked={shippingDetails.delivery_option === "home delivery"}
                onChange={(e) =>
                  setShippingDetails((s) => ({
                    ...s,
                    delivery_option: "home delivery",
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
                checked={shippingDetails.delivery_option === "pick from point"}
                onChange={(e) =>
                  setShippingDetails((s) => ({
                    ...s,
                    delivery_option: "pick from point",
                  }))
                }
              />
              <div className="check">
                <Check />
              </div>
              <span>Pick from point</span>
            </label>
          </div>
          <form onSubmit={submitHandler}>
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
              shippingDetails.delivery_option &&
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
          onClick={submitHandler}
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

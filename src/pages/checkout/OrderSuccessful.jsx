import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/form-input/button.component";
import Check from "../../components/vectors/Check";

export default function OrderSuccessful() {
  const navigate = useNavigate();
  return (
    <section className="shipping">
      <div className="shipping_progress done">
        <div className="shipping_progress-tab active">
          <span className="check">
            <Check />
          </span>
          <span className="title">Shipping details</span>
        </div>
        <div className="shipping_progress-tab active">
          <span className="check">
            <Check />
          </span>
          <span className="title">Payment details</span>
        </div>
        <div className="shipping_progress-tab active">
          <span className="check">
            <Check />
          </span>
          <span className="title">Successful</span>
        </div>
      </div>

      <div className="shipping_success">
        <div className="check">
          <Check />
        </div>
        <h1>Order Successful</h1>
        <p>Your order has been successful. Est delivery on 24 June, 2024</p>
        <p className="order">
          Order ID: <span className="order_id">#64JFH38</span>
        </p>
        <CustomButton onClick={() => navigate("/home")} className="continue">
          Continue Shopping
        </CustomButton>
      </div>
    </section>
  );
}

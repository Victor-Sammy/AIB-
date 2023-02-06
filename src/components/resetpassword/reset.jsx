import React from "react";
import "./reset.scss";
import CustomButton from "../form-input/button.component";
import { WalletButton } from "../wallet/wallet-button/wallet-button";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    setEmail("");

    navigate("/otp");
  };
  return (
    <div className="reset-page">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        <BsArrowLeft />
      </div>
      <form className="reset-container" onSubmit={handleSubmit}>
        <span className="r-head">Verify Your Email</span>
        <div className="r-email-box">
          <span className="r-label">Email Address</span>
          <input
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
            required
          />
        </div>
        <div className="r-btn">
          <WalletButton type="submit">Send OTP</WalletButton>
        </div>
      </form>
    </div>
  );
};

export default Reset;

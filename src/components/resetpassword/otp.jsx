import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { WalletButton } from "../wallet/wallet-button/wallet-button";
import "./reset.scss";

const Otp = () => {
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const navigate = useNavigate();

  const otpValue = otp.join("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(otpValue);

    navigate("/changePassword");
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <div className="otp-page">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        <BsArrowLeft />
      </div>
      <form className="otp-container" onSubmit={handleSubmit}>
        <div className="otp-head">
          <span>A 5-Digit Code has been sent to koko@gmail.com</span>
          <span>Input OTP</span>
        </div>
        <div className="otp-input">
          <div className="otp-form-field">
            {otp.map((data, index) => {
              return (
                <input
                  className="otp-field"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>

          <div className="resend-otp">
            <span>Resend OTP</span>
          </div>
        </div>

        <div className="otp-btn">
          <WalletButton type="submit ">VERIFY</WalletButton>
        </div>
      </form>
    </div>
  );
};

export default Otp;

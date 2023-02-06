import React from "react";
import "./reset.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { WalletButton } from "../wallet/wallet-button/wallet-button";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;

const ChangePassword = () => {
  const navigate = useNavigate("");
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let formFields = ["password", "confirmPassword"];

    let isValid = true;

    formFields.forEach((field) => {
      isValid = validateField(field) && isValid;
    });

    if (isValid) {
      console.log(password);

      setPassword("");
      setConfirmPassword("");

      navigate("/resetSuccess");
    }
  };

  const validateField = (name) => {
    let isValid = false;

    if (name === "password") isValid = validatePassword();
    else if (name === "confirmPassword") isValid = validateConfirmPassword();
    return isValid;
  };

  const validatePassword = () => {
    let passwordError = "";
    const value = password;
    if (value.trim === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value))
      passwordError =
        "Password must contain at least 6 characters, 1 number, 1 upper and 1 lowercase!";

    setPasswordError(passwordError);
    return passwordError === "";
  };

  const validateConfirmPassword = () => {
    let confirmPasswordError = "";
    if (password !== confirmPassword) {
      confirmPasswordError = "Passwords do not match";
    }
    setConfirmPasswordError(confirmPasswordError);
    return confirmPasswordError === "";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const visible = isVisible ? <AiFillEyeInvisible /> : <AiFillEye />;
  const showPassword = isVisible ? "text" : "password";

  return (
    <div className="c-pass-page">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        <BsArrowLeft />
      </div>
      <form className="c-pass-container" onSubmit={handleSubmit}>
        <div className="c-pass-box">
          <span className="pass-head">Type New Password</span>
          <div className="pass-field">
            <input
              type={showPassword}
              name="password"
              value={password}
              onChange={handleChange}
              className="pass-input"
            />
            <span
              className="pass-visible"
              onClick={() => setIsVisible(!isVisible)}
            >
              {visible}
            </span>
            <div className="error">{passwordError}</div>
          </div>
        </div>
        <div className="c-pass-box">
          <span className="pass-head">Confirm Password</span>
          <div className="pass-field">
            <input
              type={showPassword}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              className="pass-input"
            />
            <span
              className="pass-visible"
              onClick={() => setIsVisible(!isVisible)}
            >
              {visible}
            </span>
            <div className="error">{confirmPasswordError}</div>
          </div>
        </div>
        <div className="pass-btn">
          <WalletButton type="submit">SUBMIT</WalletButton>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;

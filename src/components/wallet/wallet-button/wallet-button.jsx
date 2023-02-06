import React from "react";
import BankIcon from "../../../assets/bank-icon.png";
import "./wallet-button.css";

const WalletButton = ({ children, disabled, ...otherProps }) => (
  <button className={disabled ? "w-disabled" : "w-button"} {...otherProps}>
    {children}
  </button>
);

const BankWalletButton = ({ children, ...otherProps }) => (
  <button className={"w-button-bank"} {...otherProps}>
    <img src={BankIcon} alt="icon" />
    {children}
  </button>
);

export { WalletButton, BankWalletButton };

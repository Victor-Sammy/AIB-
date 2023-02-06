import React from "react";
import { BsAsterisk } from "react-icons/bs";
import "./wallet-input.css";

const WalletInput = ({
  handleChange,
  label,
  icon,
  error,
  handleClear,
  clear,
  ...otherProps
}) => (
  <div className="w-input">
    <input
      className="wal-input"
      onChange={handleChange}
      {...otherProps}
      placeholder={label}
    />
    <div className="w-icon" onClick={clear}>
      {icon}
    </div>
    <div className={error ? "error-star" : "close"}>
      <BsAsterisk />
    </div>
  </div>
);

const WalletInputCV = ({ handleChange, label, error, ...otherProps }) => (
  <div className="w-input">
    <input
      className="wal-input cv"
      onChange={handleChange}
      {...otherProps}
      placeholder={label}
    />
    <div className={error ? "error-star" : "close"}>
      <BsAsterisk />
    </div>
  </div>
);

export { WalletInput, WalletInputCV };

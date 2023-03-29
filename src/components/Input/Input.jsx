import React from "react";
import "./style.scss";

export default function Input({ className, ...props }) {
  return (
    <input type="text" className={`textInput ${className ?? ""}`} {...props} />
  );
}

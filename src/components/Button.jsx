import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import LoadingSpinner from "./vectors/LoadingSpinner";

export default function Button({
  text,
  iconLeft,
  iconRight,
  loading,
  ...props
}) {
  return (
    <button className="button" {...props}>
      {iconLeft && <span className="button-icon">{iconLeft}</span>}
      {text}
      {iconRight && !loading && (
        <span className="button-icon">{iconRight}</span>
      )}
      {loading && <LoadingSpinner />}
    </button>
  );
}

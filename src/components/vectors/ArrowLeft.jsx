import React from "react";

export default function ArrowLeft({ fill }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      stroke={fill ?? "white"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.37 3.17571L6.11138 7.43432C5.60845 7.93726 5.60845 8.76024 6.11138 9.26318L10.37 13.5218"
        strokeWidth="0.979742"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

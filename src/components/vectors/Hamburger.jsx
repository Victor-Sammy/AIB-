import React from "react";

export default function Hamburger({ fill, ...props }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke={fill ?? "#012348"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2.5 5.83333H17.5" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2.5 10H17.5" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2.5 14.1667H17.5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

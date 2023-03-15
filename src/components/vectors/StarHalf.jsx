import React from "react";

export default function StarHalf({ fill, ...props }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill ?? "black"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1106_7841)">
        <path d="M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4V6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z" />
      </g>
      <defs>
        <clipPath id="clip0_1106_7841">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

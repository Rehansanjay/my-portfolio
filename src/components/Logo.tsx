import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 96">
      <title>Logo</title>
      <g transform="translate(-8.000000, -2.000000)">
        <g transform="translate(11.000000, 5.000000)">
          {/* The Hexagon Shape */}
          <polygon
            id="Shape"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="39 0 0 22 0 67 39 90 78 67 78 22"
            fill="none"
          />
          {/* The "R" Letter */}
          <text
            x="39"
            y="58"
            fill="currentColor"
            fontSize="50px"
            fontFamily="sans-serif"
            fontWeight="bold"
            textAnchor="middle"
          >
            R
          </text>
        </g>
      </g>
    </svg>
  );
}

export default Logo;
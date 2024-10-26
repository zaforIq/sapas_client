import React from 'react';

const Logo = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <rect
        x="25"
        y="25"
        width="25"
        height="25"
        fill="#60a5fa"
        transform="rotate(45 50 50)"
      />
      <rect
        x="28"
        y="37"
        width="25"
        height="25"
        fill="#1A69B9"
        transform="rotate(45 75 75)"
      />
    </svg>
  );
};

export default Logo;
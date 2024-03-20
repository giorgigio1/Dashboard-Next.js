"use client";

import React from "react";

const Button = () => {
  return (
    <button className="btn btn-primary" onClick={() => console.log("Clicked!")}>
      ADD TO CART
    </button>
  );
};

export default Button;

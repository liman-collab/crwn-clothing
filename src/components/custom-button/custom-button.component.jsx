import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} //we will always render custom-button
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;

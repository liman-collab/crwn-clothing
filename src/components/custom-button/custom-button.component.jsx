import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""}   ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`} //we will always render custom-button
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;

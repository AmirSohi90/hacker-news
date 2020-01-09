import React from "react";
import "./PaginationButton.css";

const PaginationButton = ({ buttonText, disabled, onClick }) => {
  const buttonClassName = disabled ? "disabled button" : "enabled button";
  return (
    <button
      className={buttonClassName}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {buttonText}
    </button>
  );
};

export default PaginationButton;

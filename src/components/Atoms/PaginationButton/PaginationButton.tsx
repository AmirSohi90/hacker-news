import React from "react";
import "./PaginationButton.css";

interface Props {
  buttonText: string;
  disabled: boolean;
  onClick: () => void;
}

const PaginationButton: React.SFC<Props> = ({
  buttonText,
  disabled,
  onClick
}) => {
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

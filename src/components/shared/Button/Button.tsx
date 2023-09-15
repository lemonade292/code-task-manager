import React, { PropsWithChildren } from "react";
import "./Button.scss";

export enum ButtonTypes {
  Primary = "PRIMARY",
  Secondary = "SECONDARY",
  Danger = "DANGER",
}

interface ButtonProps {
  onClick: () => void;
  type: ButtonTypes;
  disabled?: boolean;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  type,
  children,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`Button ${type}`}
      data-testid="Button"
    >
      {children}
    </button>
  );
};

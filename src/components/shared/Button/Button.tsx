import React, { PropsWithChildren } from "react";
import "./Button.scss";

export enum ButtonTypes {
  Primary = "PRIMARY",
  Secondary = "SECONDARY",
  Danger = "DANGER",
  Submit = "SUBMIT",
}

interface ButtonProps {
  onClick: () => void;
  type: ButtonTypes;
  disabled?: boolean;
}

/**
 * Button renders the generic buttons used on the app
 * @param {Function}onClick The onClick callback triggered when clicked
 * @param {ButtonTypes}type Determines the type of button and its styling
 * @param {boolean}disabled The optional switcher to determine wether or not the button is disabled. Default on false
 * @returns {React.FC<PropsWithChildren<ButtonProps>>} Button
 */

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

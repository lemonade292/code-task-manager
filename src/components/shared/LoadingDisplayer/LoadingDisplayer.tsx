import React from "react";
import "./LoadingDisplayer.scss";

interface LoadingDisplayerProps {}
/**
 * LoadingDisplayer renders the overlay with the loading animation
 * @returns {React.FC<LoadingDisplayerProps> } LoadingDisplayer
 */
export const LoadingDisplayer: React.FC<LoadingDisplayerProps> = () => {
  return (
    <div className="LoadingOverlay">
      <div className="bouncer LoadingDisplayer">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

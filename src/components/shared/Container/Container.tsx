import React, { PropsWithChildren } from "react";
import "./Container.scss";

interface ContainerProps {}

/**
 * Container represents the main box used on all app.
 * @returns {React.FC<PropsWithChildren<ContainerProps>>} Container
 */
export const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
  children,
}) => {
  return (
    <div className="Container" data-testid="Container">
      {children}
    </div>
  );
};

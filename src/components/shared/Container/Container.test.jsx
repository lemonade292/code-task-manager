import React from "react";
import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("[Container]", () => {
  it("should successfully render a Container component", () => {
    render(<Container></Container>);

    const container = screen.getByTestId("Container");
    expect(container).toHaveClass("Container");
  });

  it("should properly render the children inside it", () => {
    render(<Container>Hello World</Container>);

    const container = screen.getByTestId("Container");
    expect(container.textContent).toEqual("Hello World");
  });
});

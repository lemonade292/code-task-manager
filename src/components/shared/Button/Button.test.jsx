import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("[Button]", () => {
  const onClick = jest.fn();
  const type = "PRIMARY";

  it("should successfully render a Button component", () => {
    render(
      <Button onClick={onClick} type={type}>
        Click me
      </Button>
    );

    const button = screen.getByTestId("Button");
    expect(button).toHaveClass("Button");
  });

  it("should properly render the children inside it", () => {
    render(
      <Button onClick={onClick} type={type}>
        Click me
      </Button>
    );

    const button = screen.getByTestId("Button");
    expect(button.textContent).toEqual("Click me");
  });

  it("should trigger the onClick callback when clicking the button", () => {
    render(
        <Button onClick={onClick} type={type}>
        Click me
      </Button>
    );   
    const button = screen.getByTestId("Button");
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })
});

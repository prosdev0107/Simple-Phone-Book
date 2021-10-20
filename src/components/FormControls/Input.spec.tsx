import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("(Components) FormControls/Input", () => {
  const props = {
    name: "FirstName",
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
    type: "text",
    value: "",
  };

  it("should render without crashing", () => {
    render(<Input {...props} />);
    expect(screen.getByTestId("input-label")).toHaveTextContent("FirstName");
    expect(screen.getByTestId(`input-${props.name}`)).toHaveTextContent("");
  });
});

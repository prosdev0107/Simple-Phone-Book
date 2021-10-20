import React from "react";
import { render, screen } from "@testing-library/react";
import { Contact, ContactForm } from "./ContactForm";

describe("(Components) ContactForm", () => {
  const props = {
    onSubmit: (contact: Contact) => {},
  };

  it("should render without crashing", () => {
    render(<ContactForm {...props} />);
    const firstNameInput = screen.getByText('FirstName:');
    const lastNameInput = screen.getByText('LastName:');
    const phoneNumberInput = screen.getByText('PhoneNumber:');
    const submitButton = screen.getByTestId('button-submit');
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});

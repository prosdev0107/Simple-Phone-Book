import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ContactList } from "./ContactList";

describe("(Components) ContactList", () => {
  const props = {
  };

  it("should render without crashing", () => {
    render(<ContactList {...props} />);
    const firstNameInput = screen.getAllByText('FirstName:');
    const lastNameInput = screen.getAllByText('LastName:');
    const phoneNumberInput = screen.getAllByText('PhoneNumber:');
    expect(firstNameInput).toHaveLength(2);
    expect(lastNameInput).toHaveLength(2);
    expect(phoneNumberInput).toHaveLength(2);
  });

  it("should add a new contact when click Submit", () => {
    render(<ContactList {...props} />);
    // Get Form Elements
    const firstNameInput = screen.getAllByTestId('input-FirstName');
    const lastNameInput = screen.getAllByTestId('input-LastName');
    const phoneNumberInput = screen.getAllByTestId('input-PhoneNumber');
    const submitButton = screen.getByTestId('button-submit');

    // Set Text to input and submit
    fireEvent.change(firstNameInput[0], {target: {value: 'F Name'}});
    fireEvent.change(lastNameInput[0], {target: {value: 'L Name'}});
    fireEvent.change(phoneNumberInput[0], {target: {value: '111111'}});
    fireEvent.click(submitButton);

    // check if the contact is added.
    const tableList = screen.getAllByTestId('table-item');
    expect(tableList).toHaveLength(1);
  });

  it("should be able search", () => {
    render(<ContactList {...props} />);
    // Get Form Elements
    const firstNameInput = screen.getAllByTestId('input-FirstName');
    const lastNameInput = screen.getAllByTestId('input-LastName');
    const phoneNumberInput = screen.getAllByTestId('input-PhoneNumber');
    const submitButton = screen.getByTestId('button-submit');

    // Set Text to input and submit
    fireEvent.change(firstNameInput[0], {target: {value: 'F Name'}});
    fireEvent.change(lastNameInput[0], {target: {value: 'L Name'}});
    fireEvent.change(phoneNumberInput[0], {target: {value: '111111'}});
    fireEvent.click(submitButton);
    fireEvent.change(firstNameInput[0], {target: {value: 'F Name1'}});
    fireEvent.change(lastNameInput[0], {target: {value: 'L Name1'}});
    fireEvent.change(phoneNumberInput[0], {target: {value: '22222222'}});
    fireEvent.click(submitButton);

    // Set Text to search input and submit
    fireEvent.change(firstNameInput[1], {target: {value: 'F'}});

    // check if the contact is filtered correctly.
    let tableList = screen.getAllByTestId('table-item');
    expect(tableList).toHaveLength(2);

    // Set wrong Text to search input and submit
    fireEvent.change(firstNameInput[1], {target: {value: 'F'}});
    fireEvent.change(lastNameInput[1], {target: {value: 'L'}});
    fireEvent.change(phoneNumberInput[1], {target: {value: '111111'}});

    // check if the contact is filtered correctly.
    tableList = screen.getAllByTestId('table-item');
    expect(tableList).toHaveLength(1);
  });
});

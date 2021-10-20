import React from "react";
import { Input } from "../FormControls/Input";

export type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

type ContactFormProps = {
  onSubmit: (contact: Contact) => void;
};

// mock the id;
let i = 0;

export const ContactForm = (props: ContactFormProps) => {
  const { onSubmit } = props;
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleFirstNameChanged = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChanged = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLastName(event.target.value);
  };

  const handlePhoneNumberChanged = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    if (firstName || lastName || phoneNumber) {
      onSubmit({ firstName, lastName, phoneNumber, id: i });
      i++;
    }
  };
  return (
    <form
      className="flex items-center space-x-4 mx-auto"
      onSubmit={handleSubmit}
    >
      <Input
        name="FirstName"
        type="text"
        value={firstName}
        onChange={handleFirstNameChanged}
      />
      <Input
        name="LastName"
        type="text"
        value={lastName}
        onChange={handleLastNameChanged}
      />
      <Input
        name="PhoneNumber"
        type="number"
        value={phoneNumber}
        onChange={handlePhoneNumberChanged}
      />
      <input
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        type="submit"
        value="Submit"
      />
    </form>
  );
};

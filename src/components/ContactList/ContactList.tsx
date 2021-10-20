import React from "react";
import { ContactForm, Contact } from "./ContactForm";
import { Input } from "../FormControls/Input";

export const ContactList = () => {
  const [contacts, setContacts] = React.useState([] as Contact[]);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleSubmit = (contact: Contact) => {
    setContacts([...contacts, contact]);
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
  };

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

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.includes(firstName) &&
      contact.lastName.includes(lastName) &&
      contact.phoneNumber.includes(phoneNumber)
  );

  return (
    <div data-testid="contact-list" className="mt-5">
      <div className="flex items-center">
        <ContactForm onSubmit={handleSubmit} />
      </div>
      <div className="container">
        <table className="table-auto w-8/12 mx-auto text-left mt-5">
          <thead>
            <tr>
              <th className="border border-black p-1">
                <Input
                  name="FirstName"
                  type="text"
                  value={firstName}
                  onChange={handleFirstNameChanged}
                />
              </th>
              <th className="border border-black p-1">
                <Input
                  name="LastName"
                  type="text"
                  value={lastName}
                  onChange={handleLastNameChanged}
                />
              </th>
              <th className="border border-black p-1">
                <Input
                  name="PhoneNumber"
                  type="number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChanged}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact) => (
              <tr data-testid="table-item" key={contact.id}>
                <td className="border border-black p-1">{contact.firstName}</td>
                <td className="border border-black p-1">{contact.lastName}</td>
                <td className="border border-black p-1">
                  {contact.phoneNumber}
                </td>
              </tr>
            ))}
            <tr>
              <td className="border border-black p-1 h-8"></td>
              <td className="border border-black p-1 h-8"></td>
              <td className="border border-black p-1 h-8"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

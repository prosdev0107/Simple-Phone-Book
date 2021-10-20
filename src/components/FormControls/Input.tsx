import React from "react";

type InputProps = {
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  value: string;
};

export const Input = (props: InputProps) => {
  const { name, onChange, type, value } = props;
  return (
    <label data-testid="input-label">
      {name}: &nbsp;
      <input
        data-testid={`input-${name}`}
        className="border border-indigo-600"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

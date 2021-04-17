import React from "react";

const TextField = ({
  type = "text",
  label,
  className,
  htmlFor,
  value,
  onChange = () => {},
}) => {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        onChange={(e) => onChange(e.target.value)}
        id={htmlFor}
        type="text"
        value={value}
      />
    </div>
  );
};

export default TextField;

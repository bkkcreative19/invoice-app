import React from "react";

const SelectInput = ({
  htmlFor,
  label,
  className,
  value,
  onChange = () => {},
}) => {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{label}</label>
      <select
        onChange={(e) => onChange(e.target.value)}
        value={value}
        name=""
        id={htmlFor}
      >
        <option value="net-1-days">Net 1 Days</option>
        <option value="net-7-days">Net 7 Days</option>
        <option value="net-14-days">Net 14 Days</option>
        <option value="net-30-days">Net 30 Days</option>
      </select>
    </div>
  );
};

export default SelectInput;

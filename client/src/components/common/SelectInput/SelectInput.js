import React from "react";

const SelectInput = ({ htmlFor, label, className }) => {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{label}</label>
      <select name="" id={htmlFor}>
        <option value="">hi</option>
      </select>
    </div>
  );
};

export default SelectInput;

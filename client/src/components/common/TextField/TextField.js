import React from "react";

const TextField = ({ type = "text", label, className, htmlFor }) => {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{label}</label>
      <input id={htmlFor} type="text" />
    </div>
  );
};

export default TextField;

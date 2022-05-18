import React from "react";

const CustomInput = ({ label, value, name, handleInputChange }) => {
  const onHandleInputChange = (e) => handleInputChange(e);
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        className="input"
        value={value}
        name={name}
        onChange={(e) => onHandleInputChange(e)}
      />
    </>
  );
};

export default CustomInput;

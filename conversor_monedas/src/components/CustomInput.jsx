import React from 'react';

const CustomInput = ({ value, onChange, type }) => {
  const handleInputChange = (e) => {
    const newValue = parseFloat(e.target.value);
    onChange(isNaN(newValue) ? 0 : newValue, type);
  };

  return <input className="custom-input" type="number" value={value} onChange={handleInputChange} />;
};

export default CustomInput;

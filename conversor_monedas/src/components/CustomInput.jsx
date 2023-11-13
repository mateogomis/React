import React from 'react';

const CustomInput = ({ value, onChange, type }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value, type);
  };

  return <input type="number" value={value} onChange={handleInputChange} />;
};

export default CustomInput;

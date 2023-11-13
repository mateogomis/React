import React from 'react';
import CustomInput from './CustomInput';
import useCurrencyConverter from '../hooks/useCurrencyConvert';

const CurrencyConverterComponent = () => {
  const { euros, dollars, handleInputChange } = useCurrencyConverter();

  return (
    <div>
      <CustomInput value={euros} onChange={handleInputChange} type="euros" />
      <p>{euros} euros son {dollars} dólares</p>
      <CustomInput value={dollars} onChange={handleInputChange} type="dollars" />
    </div>
  );
};

export default CurrencyConverterComponent;

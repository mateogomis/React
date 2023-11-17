import React from 'react';
import CustomInput from './CustomInput';
import useCurrencyConverter from '../hooks/useCurrencyConvert';


const CurrencyChanger = ({ currencySymbol, initialValue, change }) => {
  const { euros, dollars, handleInputChange } = useCurrencyConverter(initialValue, change);

  const handleEuroChange = (euroValue) => {
    const dollarValue = (euroValue / 1.13).toFixed(2);
    handleInputChange(euroValue, dollarValue);
  };

  const handleDollarChange = (dollarValue) => {
    const euroValue = (dollarValue * 1.13).toFixed(2);
    handleInputChange(euroValue, dollarValue);
  };

  return (
    <div>
      <CustomInput value={euros} onChange={(e) => handleEuroChange(e.target.value)} type="euros" />
      <CustomInput value={dollars} onChange={(e) => handleDollarChange(e.target.value)} type="dollars" />
      <p>{currencySymbol} {euros}</p>
    </div>
  );
};

export default CurrencyChanger;

// CurrencyConverterComponent.js
import React from 'react';
import useCurrencyConverter from '../hooks/useCurrencyConvert';


const CurrencyConverterComponent = () => {
  const { euros, setEuros, convertToDollars } = useCurrencyConverter();
  
  
  console.log("Euros:", euros);
  const dollars = convertToDollars(euros);
  console.log("Dollars:", dollars);

  const handleInputChange = (e) => {
    const amount = e.target.value ? parseFloat(e.target.value) : 0;
    setEuros(amount);
  };

  return (
    <div>
      <input type="number" value={euros} onChange={handleInputChange} />
      <p>{euros} euros son {dollars} dólares</p>
    </div>
  );
};

export default CurrencyConverterComponent;

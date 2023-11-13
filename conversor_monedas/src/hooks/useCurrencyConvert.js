
import { useState } from 'react';

const useCurrencyConverter = () => {

  const [euros, setEuros] = useState(0);
  
  console.log("Euros state:", euros);

  const convertToDollars = (amount) => {
    const dollars = amount * 1.13;
    return dollars.toFixed(2);
  };

  return { euros, setEuros, convertToDollars };
};

export default useCurrencyConverter;

import { useState } from 'react';

const useCurrencyConverter = () => {
  const [euros, setEuros] = useState(0);
  const [dollars, setDollars] = useState(0);

  const convertToDollars = (amount) => {
    const dollars = amount * 1.13;
    return dollars.toFixed(2);
  };

  const convertToEuros = (amount) => {
    const euros = amount / 1.13;
    return euros.toFixed(2);
  };

  const handleInputChange = (amount, type) => {
    if (type === 'euros') {
      setEuros(amount);
      setDollars(convertToDollars(amount));
    } else if (type === 'dollars') {
      setDollars(amount);
      setEuros(convertToEuros(amount));
    }
  };

  return { euros, dollars, handleInputChange };
};

export default useCurrencyConverter;

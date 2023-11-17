import { useState, useCallback } from 'react';

const useCurrencyConverter = () => {
  const [euros, setEuros] = useState('');
  const [dollars, setDollars] = useState('');

  const handleInputChange = useCallback((value, type) => {
    // Verificar si el valor ingresado es numérico
    const numericValue = parseFloat(value);

    if (!isNaN(numericValue)) {
      if (type === 'euros') {
        setEuros(value);
        setDollars((numericValue * 1.13).toFixed(2));
      } else if (type === 'dollars') {
        setDollars(value);
        setEuros((numericValue / 1.13).toFixed(2));
      }
    } else {
      // Si el valor no es numérico, dejar el campo vacío
      setEuros('');
      setDollars('');
    }
  }, []);

  return { euros, dollars, handleInputChange };
};

export default useCurrencyConverter;

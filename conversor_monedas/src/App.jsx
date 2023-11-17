import React from 'react';
import CurrencyChanger from './components/CurrencyChanger';
// Asegúrate de importar el componente CurrencyChanger

const App = () => (
  <div>
    <CurrencyChanger currencySymbol="$" initialValue="10" change="1.055925" />
    <CurrencyChanger currencySymbol="£" initialValue="15" change="7.578144" />
    <CurrencyChanger currencySymbol="¥" initialValue="20" change="0.8665750" />
  </div>
);

export default App;

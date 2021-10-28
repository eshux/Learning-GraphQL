import { useQuery } from '@apollo/client';
import React, { FC } from 'react';
import './App.css';
import Card from './components/Card/Card';
import { EXCHANGE_RATES } from './queries/ExchangeRates';
import { ExchangeRatesType } from './types/ExchangeRates';

const App:FC = () => {
  const { loading, error, data } = useQuery<ExchangeRatesType>(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Learning GraphQL
        </p>
        {data && data.rates.map(({ currency, rate }) => (
          <Card key={currency} text={`${currency}: ${rate}`} />
        ))}
      </header>
    </div>
  );
};

export default App;

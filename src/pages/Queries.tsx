import { useQuery } from '@apollo/client';
import React, { FC, useState } from 'react';
import DogPhoto from '../components/DogPhoto/DogPhoto';
import { GET_DOGS } from '../queries/allDogs';
import { DogsType } from '../types/Dogs';

const Queries: FC = () => {
  // const { loading, error, data } = useQuery<ExchangeRatesType>(EXCHANGE_RATES);
  const { loading, error, data } = useQuery<DogsType>(GET_DOGS);
  const [dogs, setDogs] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Learning GraphQL
        </p>
        {/* {data && data.rates.map(({ currency, rate }) => (
           <Card key={currency} text={`${currency}: ${rate}`} />
         ))} */}
        <select name="dog" onChange={(e) => setDogs(e.target.value)}>
          {data && data.dogs.map((dog) => (
            <option key={dog.id} value={dog.breed}>
              {dog.breed}
            </option>
          ))}
        </select>
        {dogs
         && <DogPhoto breed={dogs} />}
      </header>
    </div>
  );
};

export default Queries;

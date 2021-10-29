import { useQuery } from '@apollo/client';
import React, { FC, useState } from 'react';
import CustomSelect from '../components/CustomSelect/CustomSelect';
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
    <div className="container fluid">
      <div className="row mt-80">
        <div className="col-xs-6">
          <div className="ml-80">
            <p>Select a dog breed to see a photo</p>
            {data && (
              <CustomSelect
                onChange={(e) => setDogs(e.target.value)}
                options={data.dogs.map((it) => ({ id: it.id, value: it.breed }))}
              />
            )}
          </div>
        </div>
        <div className="col-xs-6">
          {dogs && <DogPhoto breed={dogs} />}
        </div>
      </div>
    </div>
  );
};

export default Queries;

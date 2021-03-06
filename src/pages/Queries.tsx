import { useQuery } from '@apollo/client';
import React, { FC, useState } from 'react';
import CustomSelect from '../components/CustomSelect/CustomSelect';
import DogPhotoQuery from '../queryComponents/DogPhoto-useQuery';
import DogPhotoLazyQuery from '../queryComponents/DogPhoto-useLazyQuery';
import InfoField from '../components/InfoField/InfoField';
import { info } from '../data/info';
import { GET_DOGS } from '../queries/getDogs';
import { DogsType } from '../types/Dogs';

const Queries: FC = () => {
  const { loading, error, data } = useQuery<DogsType>(GET_DOGS);
  const [dog, setDog] = useState('');
  const [dog2, setDog2] = useState('');

  return (
    <div className="container fluid">
      <div className="row">
        <div className="col-xs-12">
          <h3 className="sectionTitle">
            useQuery hook
          </h3>
        </div>
      </div>
      <div className="row mt-40 mb-40">
        <div className="col-sm-6 col-xs-12">
          <div className="ml-80 minH-500 flex-center-mobile flex-column m-0-mobile">
            {loading && <p>Loading...</p>}
            {error && <p>Error :(</p>}
            { !error && !loading && data && (
            <>
              <p>Select a dog breed to see a photo</p>
              <CustomSelect
                placeholder="Dogs breeds"
                onChange={(e) => setDog(e.target.value)}
                options={data.dogs.map((it) => ({ id: it.id, value: it.breed }))}
                value={dog}
              />
            </>
            )}
            <div className="mt-40 mb-40">
              <InfoField>
                <p>{info.useQuery}</p>
                <p>We can also use:</p>
                <ul>
                  {info.useQueryPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </InfoField>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xs-12">
          {dog && <DogPhotoQuery breed={dog} />}
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <h3 className="sectionTitle">
            useLazyQuery hook
          </h3>
        </div>
      </div>
      <div className="row mt-40 mb-40">
        <div className="col-sm-6 col-xs-12">
          <div className="ml-80 minH-500 flex-center-mobile flex-column m-0-mobile">
            {loading && <p>Loading...</p>}
            {error && <p>Error :(</p>}
            { !error && !loading && data && (
            <>
              <p>Select a dog breed to see a photo</p>
              <CustomSelect
                placeholder="Dogs breeds"
                onChange={(e) => setDog2(e.target.value)}
                options={data.dogs.map((it) => ({ id: it.id, value: it.breed }))}
                value={dog2}
              />
            </>
            )}
            <div className="mt-40 mb-40">
              <InfoField>
                <p>
                  {info.useLazyQuery}
                </p>
              </InfoField>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xs-12">
          {dog2 && <DogPhotoLazyQuery breed={dog2} />}
        </div>
      </div>
    </div>
  );
};

export default Queries;

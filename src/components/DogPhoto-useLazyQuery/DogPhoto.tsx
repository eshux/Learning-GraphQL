import React, { FC } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_DOG_PHOTO } from '../../queries/dogPhoto';
import Button from '../Button/Button';

type Props = {
  breed: string;
}

const DogPhoto:FC<Props> = ({ breed }) => {
  const [getDog, { loading, error, data }] = useLazyQuery(GET_DOG_PHOTO);

  if (loading) return <span> loading...</span>;
  if (error) return <span> Error! :( </span>;

  return (
    <div className="flex-align-center flex-column">
      {data
        && (
        <img
          src={data.dog.displayImage}
          alt="dog-img"
          style={{ maxWidth: 400, width: '100%' }}
          className="mb-16"
        />
        )}
      <Button onClick={() => getDog({ variables: { breed } })}>Get Dog</Button>
    </div>
  );
};

export default DogPhoto;

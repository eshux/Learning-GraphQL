import { useQuery } from '@apollo/client';
import React, { FC } from 'react';
import { GET_DOG_PHOTO } from '../../queries/dogPhoto';
import { DogsType } from '../../types/Dogs';
import Button from '../Button/Button';

type Props = {
  breed: string;
}

const DogPhoto:FC<Props> = ({ breed }) => {
  const {
    loading, error, data, refetch
  } = useQuery<DogsType>(GET_DOG_PHOTO, {
    variables: { breed },
    // pollInterval: 500, // polling every half second ( latest data )
  });

  if (loading) return <span> loading...</span>;
  if (error) return <span> Error! :( </span>;

  return (
    <div className="flex-align-center flex-column">
      <img
        src={data && data.dog.displayImage}
        alt="dog-img"
        style={{ maxWidth: 400 }}
        className="mb-16"
      />
      <Button onClick={() => refetch()}>Refetch!</Button>
    </div>
  );
};

export default DogPhoto;

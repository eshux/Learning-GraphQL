import { useQuery } from '@apollo/client';
import React, { FC } from 'react';
import { GET_DOG_PHOTO } from '../../queries/dogPhoto';
import { DogsType } from '../../types/Dogs';

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

  if (loading) return <span>Loading</span>;
  if (error) return <span>Error! {error} </span>;

  return (
    <>
      <img
        src={data && data.dog.displayImage}
        alt="dog-img"
        style={{ maxWidth: 600, margin: '20px' }}
      />
      <button type="button" onClick={() => refetch()}>Refetch!</button>
    </>
  );
};

export default DogPhoto;

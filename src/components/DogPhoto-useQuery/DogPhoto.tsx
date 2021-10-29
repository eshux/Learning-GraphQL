import { NetworkStatus, useQuery } from '@apollo/client';
import React, { FC } from 'react';
import { GET_DOG_PHOTO } from '../../queries/dogPhoto';
import { DogsType } from '../../types/Dogs';
import Button from '../Button/Button';

type Props = {
  breed: string;
}

const DogPhoto:FC<Props> = ({ breed }) => {
  const {
    loading, error, data, refetch, networkStatus
  } = useQuery<DogsType>(GET_DOG_PHOTO, {
    variables: { breed },
    notifyOnNetworkStatusChange: true
    // pollInterval: 500, // polling every half second ( latest data )
  });

  if (networkStatus === NetworkStatus.refetch) return <span>Refetching...</span>;
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
      <Button onClick={() => refetch()}>Refetch!</Button>
    </div>
  );
};

export default DogPhoto;

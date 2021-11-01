import { ApolloClient, DocumentNode, NormalizedCacheObject } from '@apollo/client';
import React, { FC } from 'react';
import Button from '../components/Button/Button';
import InfoField from '../components/InfoField/InfoField';
import { info } from '../data/info';
import { GET_DOG_1 } from '../queries/getDog_1';
import { GET_DOG_2 } from '../queries/getDog_2';
import DogPhoto from '../queryComponents/DogPhoto-useQuery';

type Props = {
  client: ApolloClient<NormalizedCacheObject>
}

const Refetching:FC<Props> = ({ client }) => {
  const refetchSpecific = (query: DocumentNode) => {
    client.refetchQueries({
      include: [query], // either DocumentNode or query Name
    });
  };

  const refetchingAll = () => {
    client.refetchQueries({
      include: 'active', // for all queries (even inactive) use 'all' instead of 'active'
    });
  };

  return (
    <div className="container fluid">
      <div className="row">
        <div className="col-xs-12">
          <h3 className="sectionTitle">
            client.refetchQueries
          </h3>
        </div>
      </div>
      <div className="row mt-40 mb-40">
        <div className="col-sm-6 col-xs-12">
          <div className="ml-80 minH-500 flex-center-mobile flex-column m-0-mobile">
            <h4>Refetch a specific query</h4>
            <Button onClick={() => refetchSpecific(GET_DOG_1)}>
              Refetch &quot;Get Doberman&quot;
            </Button>
            <div className="ml-8 mb-8" />
            <Button onClick={() => refetchSpecific(GET_DOG_2)}>
              Refetch &quot;Get Rottweiler&quot;
            </Button>
            <h4>Refetch all queries</h4>
            <Button onClick={refetchingAll}>
              Refetch all
            </Button>
            <div className="mb-16" />
            <InfoField>
              <p>Refetching queries outside the hooks.</p>
              <p>
                {info.refetchQueries}
              </p>
            </InfoField>
          </div>
        </div>
        <div className="col-sm-6 col-xs-12">
          <div className="ml-80 minH-500 flex-center-mobile flex-column m-0-mobile">
            <p>Query &quot;Get Doberman&quot;</p>
            <DogPhoto breed="doberman" query={GET_DOG_1} hideButton />
            <div className="mb-16" />
            <p>Query &quot;Get Rottweiler&quot;</p>
            <DogPhoto breed="rottweiler" query={GET_DOG_2} hideButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refetching;

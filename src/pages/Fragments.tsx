/* eslint-disable max-len */
import { FC } from 'react';
import InfoField from '../components/InfoField/InfoField';
import { info } from '../data/info';
import GetCharacter from '../queryComponents/GetCharacter';

const Fragments:FC = () => (
  <div className="container fluid">
    <div className="row">
      <div className="col-xs-12">
        <h3 className="sectionTitle">
          Fragments
        </h3>
      </div>
    </div>
    <div className="row mt-40 mb-40">
      <div className="col-sm-6 col-xs-12">
        <div className="ml-80 flex flex-center-mobile m-0-mobile">
          <GetCharacter />
        </div>
      </div>
      <div className="col-sm-6 col-xs-12">
        <div className="flex-center-mobile m-0-mobile mt-8">
          <InfoField>
            <p>{info.fragments}</p>
            <p>
              Read more about COLOCATING fragments {' '}
              <a
                className="anchorDark"
                href="https://www.apollographql.com/docs/react/data/fragments/#colocating-fragments"
              >
                here!
              </a>
            </p>
          </InfoField>
        </div>
      </div>
    </div>
  </div>
);

export default Fragments;

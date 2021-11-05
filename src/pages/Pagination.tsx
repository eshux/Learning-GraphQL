/* eslint-disable max-len */
import { FC } from 'react';
import GetAllCharactersMore from '../queryComponents/GetAllCharacters-LoadMore';
import GetAllCharactersNext from '../queryComponents/GetAllCharacters-NextPage';

const Pagination:FC = () => (
  <div className="container fluid">
    <div className="row">
      <div className="col-xs-12">
        <h3 className="sectionTitle">
          fetchMore - Load more
        </h3>
      </div>
    </div>
    <div className="row mt-40 mb-40">
      <div className="col-xs-12">
        <div className="ml-80 flex flex-center-mobile m-0-mobile">
          <GetAllCharactersMore />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <h3 className="sectionTitle">
          fetchMore - Next page
        </h3>
      </div>
    </div>
    <div className="row mt-40 mb-40">
      <div className="col-xs-12">
        <div className="ml-80 flex flex-center-mobile m-0-mobile">
          <GetAllCharactersNext />
        </div>
      </div>
    </div>
  </div>
);

export default Pagination;

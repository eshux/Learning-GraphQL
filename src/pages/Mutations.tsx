import React, { FC } from 'react';
import InfoField from '../components/InfoField/InfoField';
import { info } from '../data/info';
import AddTodo from '../queryComponents/AddTodo';
import GetTodo from '../queryComponents/GetTodo';

const Mutations: FC = () => (
  <div className="container fluid">
    <div className="row">
      <div className="col-xs-12">
        <h3 className="sectionTitle">
          useMutation hook
        </h3>
      </div>
    </div>
    <div className="row mt-40 mb-40">
      <div className="col-sm-6 col-xs-12">
        <div className="ml-80 minH-500 flex-center-mobile flex-column m-0-mobile">
          <p>Add a task to your list</p>
          <AddTodo />
          <div className="mt-40 mb-40">
            <InfoField>
              <p>{info.useMutation}</p>
              <p>We can accomplish that within useMutation by:</p>
              <ul>
                {info.useMutationPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </InfoField>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xs-12">
        <div className="ml-80 minH-500 flex-center-mobile flex-column m-0-mobile">
          <p>List of tasks:</p>
          <GetTodo />
        </div>
      </div>
    </div>
  </div>
);

export default Mutations;

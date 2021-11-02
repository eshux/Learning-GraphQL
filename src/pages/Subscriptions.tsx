import { FC } from 'react';
import InfoField from '../components/InfoField/InfoField';
import { info } from '../data/info';

const Subscriptions:FC = () => (
  <div className="container fluid">
    <div className="row">
      <div className="col-xs-12">
        <h3 className="sectionTitle">
          useSubscription hook
        </h3>
      </div>
    </div>
    <div className="row mt-40 mb-40">
      <div className="col-xs-12">
        <div className="ml-80 minH-500 flex-center-mobile flex-column m-0-mobile">
          <InfoField>
            <p>
              {info.subscription} Read more about it {' '}
              <a
                className="anchorDark"
                href="https://www.apollographql.com/docs/react/data/subscriptions/"
              >
                here!
              </a>
            </p>
            <p>You should use subscriptions for the following:</p>
            <ul>
              {info.subscriptionPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoField>
        </div>
      </div>
    </div>
  </div>
);

export default Subscriptions;

import React, { FC } from 'react';

const Home: FC = () => (
  <div style={{
    position: 'absolute',
    zIndex: -1,
    top: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <p>
      Learning GraphQL with Apollo client and React
    </p>
  </div>
);

export default Home;

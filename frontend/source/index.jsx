import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

import { client } from './libs/graphqlClient';
import { enableHMRForReducers } from './libs/enableHMRForReducers.js';
import { store } from './store';

import { App } from './layout/app/App';

enableHMRForReducers(store);

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('app')
);

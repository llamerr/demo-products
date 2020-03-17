import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './store/storeConfig';
import { DefaultLayout } from './layout';

import './App.scss';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route component={DefaultLayout} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;

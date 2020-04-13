import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Articles from '@geekuendo/shared/containers/articles';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Articles />
    </Provider>
  );
};

export default App;

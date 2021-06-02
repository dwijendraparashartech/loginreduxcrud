import React from 'react';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import { RouterStack } from './_router';


export const App = () => {

  return (
    <Provider store={store}>
      <RouterStack />
    </Provider>
  );
}
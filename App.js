import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import YourApp from './src/containers/YourApp';
import reducer from './src/reducers';

const store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <YourApp />
      </Provider>
    );
  }
}

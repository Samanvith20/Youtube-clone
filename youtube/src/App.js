import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Provider } from 'react-redux';  
import store from './utils/store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
};

export default App;

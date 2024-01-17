import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Provider } from 'react-redux';  
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from './Components/MainContainer';
import Watchpage from './Components/Watchpage';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <Watchpage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;

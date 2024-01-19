import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Provider } from 'react-redux';  
import store from './utils/store';
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from './Components/MainContainer';
import Watchpage from './Components/Watchpage';
import Demo from './Components/Demo';
import Demo2 from './Components/Demo2';

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
        {
          path: "Demo",
          element: <> <Demo /> <Demo2/></>
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div>
         <BrowserRouter>
        <Header />
        </BrowserRouter>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;

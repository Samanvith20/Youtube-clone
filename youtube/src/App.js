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
   const appRouter= createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
       path:"/",
       children:<MainContainer/>
    },
    {
      path: "watch",
      element: <Watchpage />,
    },
  ]
   }])
  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
};

export default App;

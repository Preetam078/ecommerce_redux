import React from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Signup from './features/auth/components/Signup';
import SignupPage from './pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },
  {
    path:"/login",
    element:<LoginPage/>,
  },
  {
    path:"/signup",
    element:<SignupPage/>
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

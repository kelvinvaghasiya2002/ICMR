import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import ContactUs from './component/ContactUs/ContactUs.jsx';
import SignIn from './component/Signin/Signin.jsx';
import SignUp from './component/Signup/Signup.jsx';
import UserProvider from './contexts/User.jsx';
import Map from "./component/Map/Map.jsx"
import InformationPage from './component/InformationPage/InformationPage.jsx';
import Protected from './component/Protected/Protected.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProvider><App /></UserProvider>
  },
  {
    path: "/contact-us",
    element: <UserProvider><ContactUs /></UserProvider>
  },
  {
    path: "/sign-in",
    element: <UserProvider><SignIn /></UserProvider>
  },
  {
    path: "/sign-up",
    element: <UserProvider><SignUp /></UserProvider>
  },
  {
    path: "/aboutus",
    element: <UserProvider><InformationPage /></UserProvider>
  }, {
    path: "/project-sites",
    element: <UserProvider><Map /></UserProvider>
  },
  {
    path: "/protected",
    element: <UserProvider><Protected /></UserProvider>
  }
])



setTimeout(()=>{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <UserProvider><App /></UserProvider>
      </BrowserRouter>
    </React.StrictMode>,
  )
},100)

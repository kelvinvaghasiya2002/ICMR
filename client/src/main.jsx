import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import ContactUs from './component/ContactUs/ContactUs.jsx';
import SignIn from './component/Signin/Signin.jsx';
import SignUp from './component/Signup/Signup.jsx';


const router = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/contact-us",
    element : <ContactUs />
  },
  {
    path : "/sign-in",
    element : <SignIn />
  },
  {
    path : "/sign-up",
    element : <SignUp />
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

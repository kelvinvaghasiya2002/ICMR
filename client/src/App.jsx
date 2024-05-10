import { useState, useEffect } from 'react'
import Navbar from './component/Navbar/Navbar'
import axios from "axios"
import FirstPage from './component/FirstPage/FirstPage'
import UserProvider, { useUserInfo } from './contexts/User.jsx'
import InformationPage from "./component/InformationPage/InformationPage.jsx"
import ContactUs from "./component/ContactUs/ContactUs.jsx"
import HomePage from './component/HomePage/HomePage.jsx'
import Map from './component/Map/Map.jsx'
import { Routes, Route } from "react-router-dom";
import SignIn from './component/Signin/Signin.jsx'
import SignUp from './component/Signup/Signup.jsx'
import Protected from './component/Protected/Protected.jsx'
import FormAA from './component/Forms/FormAA.jsx'
import FormAB from './component/Forms/FormAB.jsx'
const url = import.meta.env.VITE_SERVER;


function App() {
  document.title = "ICMR"
  const { user, setUser, loggedIn, setloggedIn } = useUserInfo();
  console.log(user);

  const getUser = async () => {
    try {
      const { data } = await axios.get(`${url}/login/success`,
        { withCredentials: true }
      );
      setUser(data.user._json);
      setloggedIn(true)
      // console.log(data.user._json);
      // console.log(user);

    } catch (error) {
      console.log(error.response);

      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(`${url}/localauth?token=${token}`);
        setUser(data.user);
        setloggedIn(true)
        // console.log(user);
      } catch (error) {
        console.log(error.response);
      }

    }
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={!loggedIn?<FirstPage />:<HomePage />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/protected' element={loggedIn?<Protected />:<SignIn/>}/>
      <Route path= "/aboutus" element={ <InformationPage />} />
      <Route path='/project-sites' element={<Map />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/formsaa' element={<FormAA />} />
      <Route path='/formsab' element={<FormAB />} />
      <Route path='/formsac' element={<FormAA />} />
    </Routes>
    </>
  )

}

export default App


{/* <Navbar />
      {!loggedIn && <FirstPage />}
      {/* {loggedIn && <ContactUs />} */}
  {/* <InformationPage /> */ }
  {/* {loggedIn && <HomePage />}  */ }
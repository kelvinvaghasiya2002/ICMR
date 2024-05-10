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
import FormAC3 from './component/Forms/FormAC3.jsx'
import FormAC4 from './component/Forms/FormAC4.jsx'
import FormAC5 from './component/Forms/FormAC5.jsx'
import FormAC6 from './component/Forms/FormAC6.jsx'
import FormAC7 from './component/Forms/FormAC7.jsx'
import FormAC8 from './component/Forms/FormAC8.jsx'
import FormAC9 from './component/Forms/FormAC9.jsx'
import FormAC10 from './component/Forms/FormAC10.jsx'
import FormAC11 from './component/Forms/FormAC11.jsx'
import FormAC12 from './component/Forms/FormAC12.jsx'
import FormAC13 from './component/Forms/FormAC13.jsx'
import FormAC14 from './component/Forms/FormAC14.jsx'
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
    } catch (error) {
      console.log(error.response);

      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(`${url}/localauth?token=${token}`);
        setUser(data.user);
        setloggedIn(true)
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
      <Route path='/formsac-householdschedule' element={<FormAC3 />} />
      <Route path='/formsac-relationshipwithheadofhousehold' element={<FormAC4 />} />
      <Route path='/formsac-trauma&burns' element={<FormAC5 />} />
      <Route path='/formsac-stemi' element={<FormAC6 />} />
      <Route path='/formsac-stroke' element={<FormAC7 />} />
      <Route path='/formsac-acuterespiratoryillness' element={<FormAC8 />} />
      <Route path='/formsac-postpartumhaemorrhage' element={<FormAC9 />} />
      <Route path='/formsac-neonatalemergencies' element={<FormAC10 />} />
      <Route path='/formsac-snakebite' element={<FormAC11 />} />
      <Route path='/formsac-poisoning' element={<FormAC12 />} />
      <Route path='/formsac-others' element={<FormAC13 />} />
      <Route path='/formsac-verbal&socialautopsyquestionnaire' element={<FormAC14 />} />
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
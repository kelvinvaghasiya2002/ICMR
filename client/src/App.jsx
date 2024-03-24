import { useState,useEffect } from 'react'
import Navbar from './component/Navbar/Navbar'
import axios from "axios"
import SignIn from './component/Signin/Signin'
import SignUp from './component/Signup/Signup'
import ContactUs from './component/ContactUs/ContactUs'
import FirstPage from './component/FirstPage/FirstPage'
import InformationPage from './component/InformationPage/InformationPage'
import Map from './component/Map/Map'

function App() {

  const getUser = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/login/success",
        { withCredentials: true });
      console.log(data.user);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <>
      <Navbar />
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <ContactUs/> */}
      <FirstPage />

    </>
  )
}

export default App

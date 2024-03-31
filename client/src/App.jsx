import { useState, useEffect } from 'react'
import Navbar from './component/Navbar/Navbar'
import axios from "axios"
import FirstPage from './component/FirstPage/FirstPage'
import { useUserInfo } from './contexts/User.jsx'
import InformationPage from "./component/InformationPage/InformationPage.jsx"
import ContactUs from "./component/ContactUs/ContactUs.jsx"
import HomePage from './component/HomePage/HomePage.jsx'


function App() {
  document.title = "ICMR"
  const { user, setUser, loggedIn, setloggedIn } = useUserInfo();
  console.log(user);

  const getUser = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/login/success",
        { withCredentials: true });
      setUser(data.user._json);
      setloggedIn(true)
      // console.log(data.user._json);
      // console.log(user);

    } catch (error) {
      console.log(error.response);

      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(`http://localhost:3000/localauth?token=${token}`);
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
      {!loggedIn && <FirstPage />}
      {/* {loggedIn && <ContactUs />} */}
      {/* <InformationPage /> */}
      {loggedIn && <HomePage />}
    </>
  )
}

export default App

import { useState,useEffect } from 'react'
import Navbar from './component/Navbar/Navbar'
import axios from "axios"
import FirstPage from './component/FirstPage/FirstPage'


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
      <FirstPage />

    </>
  )
}

export default App

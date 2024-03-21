import { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import SignIn from './component/Signin/Signin'
import SignUp from './component/Signup/Signup'
function App() {
  
  return (
    <>
    <Navbar/>
    {/* <SignIn/> */}
    <SignUp/>
    </>
  )
}

export default App

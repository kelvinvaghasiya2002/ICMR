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
import FormAA from './component/Forms/CST/FormAA.jsx'
import FormAB from './component/Forms/CST/FormAB.jsx'
import FormAC3 from './component/Forms/CST/FormAC3.jsx'
import FormAC4 from './component/Forms/CST/FormAC4.jsx'
import FormAC5 from './component/Forms/CST/FormAC5.jsx'
import FormAC6 from './component/Forms/CST/FormAC6.jsx'
import FormAC7 from './component/Forms/CST/FormAC7.jsx'
import FormAC8 from './component/Forms/CST/FormAC8.jsx'
import FormAC9 from './component/Forms/CST/FormAC9.jsx'
import FormAC10 from './component/Forms/CST/FormAC10.jsx'
import FormAC11 from './component/Forms/CST/FormAC11.jsx'
import FormAC12 from './component/Forms/CST/FormAC12.jsx'
import FormAC13 from './component/Forms/CST/FormAC13.jsx'
import FormAC14 from './component/Forms/CST/FormAC14.jsx'
import FormAC15 from './component/Forms/CST/FormAC15.jsx'
import FormAC16 from './component/Forms/CST/FormAC16.jsx'
import FormB17 from './component/Forms/CST/FormB17.jsx'
import FormB18 from './component/Forms/CST/FormB18.jsx'
import FormB19 from './component/Forms/CST/FormB19.jsx'
import FormC20 from './component/Forms/CST/FormC20.jsx'
import FormD21 from './component/Forms/CST/FormD21.jsx'
import FormE22 from './component/Forms/CST/FormE22.jsx'
import FormF from './component/Forms/HFAT-1/FormF.jsx'
import FormG from './component/Forms/HFAT-1/FormG.jsx'
import FormH from './component/Forms/HFAT-1/FormH.jsx'
import FormI from './component/Forms/HFAT-1/FormI.jsx'
import FormJ from './component/Forms/HFAT-1/FormJ.jsx'
import FormA from './component/Forms/HFAT-1/FormA.jsx'
import FormB from './component/Forms/HFAT-1/FormB.jsx'
import FormC from './component/Forms/HFAT-1/FormC.jsx'
import FormD from './component/Forms/HFAT-1/FormD.jsx'
import FormD1 from './component/Forms/HFAT-1/FormD1.jsx'
import FormE from './component/Forms/HFAT-1/FormE.jsx'
import Form2A from './component/Forms/HFAT-2/Form2A.jsx'
import Form2C from './component/Forms/HFAT-2/Form2C.jsx'
import Form2B from './component/Forms/HFAT-2/Form2B.jsx'
import Form2D from './component/Forms/HFAT-2/Form2D.jsx'
import Form2D1 from './component/Forms/HFAT-2/Form2D1.jsx'
import Form2E from './component/Forms/HFAT-2/Form2E.jsx'
import Form2F from './component/Forms/HFAT-2/Form2F.jsx'
import Form2G from './component/Forms/HFAT-2/Form2G.jsx'
import Form2H from './component/Forms/HFAT-2/Form2H.jsx'
import Form2I from './component/Forms/HFAT-2/Form2I.jsx'
import Form2J from './component/Forms/HFAT-2/Form2J.jsx'
import Form3A from './component/Forms/HFAT-3/Form3A.jsx'
import Form3C from './component/Forms/HFAT-3/Form3C.jsx'
import Form3B from './component/Forms/HFAT-3/Form3B.jsx'
import Form3D from './component/Forms/HFAT-3/Form3D.jsx'
import Form3D2 from './component/Forms/HFAT-3/Form3D2.jsx'
import Form3E from './component/Forms/HFAT-3/Form3E.jsx'
import Form3F from './component/Forms/HFAT-3/Form3F.jsx'
import Form3G from './component/Forms/HFAT-3/Form3G.jsx'
import Form3H from './component/Forms/HFAT-3/Form3H.jsx'
import Form3I from './component/Forms/HFAT-3/Form3I.jsx'
import Form3J from './component/Forms/HFAT-3/Form3J.jsx'
import Facility from './component/Forms/Ambulance/Facility.jsx'

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
        // console.log(data);
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
        <Route path='/' element={!loggedIn ? <FirstPage /> : <HomePage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/protected' element={loggedIn ? <Protected /> : <SignIn />} />
        <Route path="/aboutus" element={<InformationPage />} />
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
        <Route path='/formsac-verbal&socialautopsyquestionnaire-2' element={<FormAC15 />} />
        <Route path='/formsac-verbal&socialautopsyquestionnaire-3' element={<FormAC16 />} />
        <Route path='/formsb-sociodemographicprofile' element={<FormB17 />} />
        <Route path='/formsb-initialhealthcareseekingpathway1' element={<FormB18 />} />
        <Route path='/formsb-initialhealthcareseekingpathway2' element={<FormB19 />} />
        <Route path='/formsc-referralfacility' element={<FormC20 />} />
        <Route path='/formsd-barriersandfacilitatorsinseekingcare' element={<FormD21 />} />
        <Route path='/formse-costing' element={<FormE22 />} />



        {/* BELOW are HFAT-1 */}


        <Route path='/healthfacilityinformation' element={<FormA />} />
        <Route path='/infrastructure' element={<FormB />} />
        <Route path='/humanresources' element={<FormC />} />
        <Route path='/logisticsdrugsconsumablesequipment-1' element={<FormD />} />
        <Route path='/logisticsdrugsconsumablesequipment-2' element={<FormD1 />} />
        <Route path='/emergencycareservices' element={<FormE />} />
        <Route path='/informationsystem' element={<FormF />} />
        <Route path='/finance' element={<FormG />} />
        <Route path='/leadershipandgovernance' element={<FormH />} />
        <Route path='/processpoliciessops' element={<FormI />} />
        <Route path='/referrallinkages' element={<FormJ />} />

        {/* BELOW are HFAT-2 */}

        <Route path='/facilityinformation-2' element={<Form2A />} />
        <Route path='/infrastructure-2' element={<Form2B />} />
        <Route path='/humanresources-2' element={<Form2C />} />
        <Route path='/logistics-2' element={<Form2D />} />
        <Route path='/logistics-2-1' element={<Form2D1 />} />
        <Route path='/emergencycareservices-2' element={<Form2E />} />
        <Route path='/informationsystem-2' element={<Form2F />} />
        <Route path='/finance-2' element={<Form2G />} />
        <Route path='/leadershipandgovernance-2' element={<Form2H />} />
        <Route path='/processpoliciessops-2' element={<Form2I />} />
        <Route path='/referrallinkages-2' element={<Form2J />} />


        {/* BELOW are HFAT-3 */}


        <Route path='/facilityinformation-3' element={<Form3A />} />
        <Route path='/infrastructure-3' element={<Form3B />} />
        <Route path='/humanresources-3' element={<Form3C />} />
        <Route path='/logistics-3' element={<Form3D />} />
        <Route path='/logistics-3-1' element={<Form3D2 />} />
        <Route path='/emergencycareservices-3' element={<Form3E />} />
        <Route path='/informationsystem-3' element={<Form3F />} />
        <Route path='/finance-3' element={<Form3G />} />
        <Route path='/leadershipandgovernance-3' element={<Form3H />} />
        <Route path='/processpoliciessops-3' element={<Form3I />} />
        <Route path='/referrallinkages-3' element={<Form3J />} />
        <Route path='/facilityinformation' element={<Facility />} />
      </Routes>
    </>
  )

}

export default App
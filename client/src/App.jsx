import { useEffect } from "react";
import Navbar from "./component/Navbar/Navbar";
import axios from "axios";
import FirstPage from "./component/FirstPage/FirstPage";
import { useUserInfo } from "./contexts/User.jsx";
import InformationPage from "./component/InformationPage/InformationPage.jsx";
import ContactUs from "./component/ContactUs/ContactUs.jsx";
import HomePage from "./component/HomePage/HomePage.jsx";
import Map from "./component/Map/Map.jsx";
import { useEffect } from "react";
import Navbar from "./component/Navbar/Navbar";
import axios from "axios";
import FirstPage from "./component/FirstPage/FirstPage";
import { useUserInfo } from "./contexts/User.jsx";
import InformationPage from "./component/InformationPage/InformationPage.jsx";
import ContactUs from "./component/ContactUs/ContactUs.jsx";
import HomePage from "./component/HomePage/HomePage.jsx";
import Map from "./component/Map/Map.jsx";
import { Routes, Route } from "react-router-dom";
import SignIn from "./component/Signin/Signin.jsx";
import SignUp from "./component/Signup/Signup.jsx";
import Protected from "./component/Protected/Protected.jsx";
import FormF from "./component/Forms/HFAT-1/FormF.jsx";
import FormG from "./component/Forms/HFAT-1/FormG.jsx";
import FormH from "./component/Forms/HFAT-1/FormH.jsx";
import FormI from "./component/Forms/HFAT-1/FormI.jsx";
import FormJ from "./component/Forms/HFAT-1/FormJ.jsx";
import FormA from "./component/Forms/HFAT-1/FormA.jsx";
import FormB from "./component/Forms/HFAT-1/FormB.jsx";
import FormC from "./component/Forms/HFAT-1/FormC.jsx";
import FormD from "./component/Forms/HFAT-1/FormD.jsx";
import FormD1 from "./component/Forms/HFAT-1/FormD1.jsx";
import FormE from "./component/Forms/HFAT-1/FormE.jsx";
import Form2A from "./component/Forms/HFAT-2/Form2A.jsx";
import Form2C from "./component/Forms/HFAT-2/Form2C.jsx";
import Form2B from "./component/Forms/HFAT-2/Form2B.jsx";
import Form2D from "./component/Forms/HFAT-2/Form2D.jsx";
import Form2D2 from "./component/Forms/HFAT-2/Form2D2.jsx";
import Form2E from "./component/Forms/HFAT-2/Form2E.jsx";
import Form2F from "./component/Forms/HFAT-2/Form2F.jsx";
import Form2G from "./component/Forms/HFAT-2/Form2G.jsx";
import Form2H from "./component/Forms/HFAT-2/Form2H.jsx";
import Form2I from "./component/Forms/HFAT-2/Form2I.jsx";
import Form2J from "./component/Forms/HFAT-2/Form2J.jsx";
import Form3A from "./component/Forms/HFAT-3/Form3A.jsx";
import Form3C from "./component/Forms/HFAT-3/Form3C.jsx";
import Form3B from "./component/Forms/HFAT-3/Form3B.jsx";
import Form3D from "./component/Forms/HFAT-3/Form3D.jsx";
import Form3D2 from "./component/Forms/HFAT-3/Form3D2.jsx";
import Form3E from "./component/Forms/HFAT-3/Form3E.jsx";
import Form3F from "./component/Forms/HFAT-3/Form3F.jsx";
import Form3G from "./component/Forms/HFAT-3/Form3G.jsx";
import Form3H from "./component/Forms/HFAT-3/Form3H.jsx";
import Form3I from "./component/Forms/HFAT-3/Form3I.jsx";
import Form3J from "./component/Forms/HFAT-3/Form3J.jsx";
import Facility from "./component/Forms/Ambulance/Facility.jsx";
import Heading from "./component/Heading/Heading.jsx";
import FormA1 from "./component/Forms/CST/FormA1.jsx";
import FormA2 from "./component/Forms/CST/FormA2.jsx";
import FormA3 from "./component/Forms/CST/FormA3.jsx";
import FormA4 from "./component/Forms/CST/FormA4.jsx";
import FormA5 from "./component/Forms/CST/FormA5.jsx";
import FormA6 from "./component/Forms/CST/FormA6.jsx";
import FormA7 from "./component/Forms/CST/FormA7.jsx";
import FormA8 from "./component/Forms/CST/FormA8.jsx";
import FormA9 from "./component/Forms/CST/FormA9.jsx";
import FormA10 from "./component/Forms/CST/FormA10.jsx";
import FormA11 from "./component/Forms/CST/FormA11.jsx";
import FormA12 from "./component/Forms/CST/FormA12.jsx";
import FormA13 from "./component/Forms/CST/FormA13.jsx";
import FormA14 from "./component/Forms/CST/FormA14.jsx";
import FormA15 from "./component/Forms/CST/FormA15.jsx";
import FormB16 from "./component/Forms/CST/FormB16.jsx";
import FormB17 from "./component/Forms/CST/FormB17.jsx";
import FormB18 from "./component/Forms/CST/FormB18.jsx";
import FormB19 from "./component/Forms/CST/FormB19.jsx";
import FormB19b from "./component/Forms/CST/FormB19b.jsx";
import FormA5a from "./component/Forms/CST/FormA5a.jsx";
import FormC20 from "./component/Forms/CST/FormC20.jsx";
import FormC21 from "./component/Forms/CST/FormC21.jsx";
import FormC22 from "./component/Forms/CST/FormC22.jsx";
import FormC23 from "./component/Forms/CST/FormC23.jsx";
import FormD24 from "./component/Forms/CST/FormD24.jsx";
import FormD25 from "./component/Forms/CST/FormD25.jsx";
import FormE26 from "./component/Forms/CST/FormE26.jsx";
import FormF27 from "./component/Forms/CST/FormF27.jsx";
import FormF28 from "./component/Forms/CST/FormF28.jsx";
import FormG29 from "./component/Forms/CST/FormG29.jsx";
import FormH30 from "./component/Forms/CST/FormH30.jsx";
import FormH31 from "./component/Forms/CST/FormH31.jsx";

import NotFound from "./NotFound.jsx"; // For Not Found Page

import FormFA from "./component/Forms/AUTOPSY/formFA.jsx";

const url = import.meta.env.VITE_SERVER;

function App() {
  document.title = "ICMR";
  document.title = "ICMR";
  const { user, setUser, loggedIn, setloggedIn } = useUserInfo();
  console.log(user);

  const getUser = async () => {
    try {
      const { data } = await axios.get(`${url}/login/success`, {
        withCredentials: true,
      });
      const { data } = await axios.get(`${url}/login/success`, {
        withCredentials: true,
      });
      setUser(data.user._json);
      setloggedIn(true);
      setloggedIn(true);
    } catch (error) {
      console.log(error.response);

      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(`${url}/localauth?token=${token}`);
        // console.log(data);
        setUser(data.user);
        setloggedIn(true);
        setloggedIn(true);
      } catch (error) {
        console.log(error.response);
      }
    }
  };
  };

  useEffect(() => {
    getUser();
  }, []);
  }, []);

  return (
    <>
      <Navbar />
      <Heading />
      <Routes>
        <Route path="/" element={!loggedIn ? <FirstPage /> : <HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={!loggedIn ? <FirstPage /> : <HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path='/sign-up' element={<SignUp />} /> */}
        <Route
          path="/protected"
          element={loggedIn ? <Protected /> : <SignIn />}
        />
        <Route
          path="/protected"
          element={loggedIn ? <Protected /> : <SignIn />}
        />
        <Route path="/aboutus" element={<InformationPage />} />
        <Route path="/project-sites" element={<Map />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/project-sites" element={<Map />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* BELOW are CST */}
        {/* <Route path='/formsaa' element={<FormAA />} />
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
        <Route path='/formse-costing' element={<FormE22 />} /> */}

        <Route path="/siteinformation" element={<FormA1 />} />
        <Route path="/clusterinformation" element={<FormA2 />} />
        <Route path="/linelistingofhouseholdmembers-1" element={<FormA3 />} />
        <Route path="/linelistingofhouseholdmembers-2" element={<FormA4 />} />
        <Route path="/linelistingofhouseholdmembers-3" element={<FormA5 />} />
        <Route path="/linelistingofhouseholdmembers-4" element={<FormA5a />} />
        <Route path="/trauma" element={<FormA6 />} />
        <Route path="/burn" element={<FormA7 />} />
        <Route path="/stemi" element={<FormA8 />} />
        <Route path="/stroke" element={<FormA9 />} />
        <Route path="/acuterespiratoryillness" element={<FormA10 />} />
        <Route path="/maternalneonatalemergency" element={<FormA11 />} />
        <Route path="/snakebite" element={<FormA12 />} />
        <Route path="/poisoning" element={<FormA13 />} />
        <Route path="/others" element={<FormA14 />} />
        <Route path="/death" element={<FormA15 />} />
        <Route
          path="/socio-demographicprofileofthepatientinthehhwithemergencycondition"
          element={<FormB16 />}
        />
        <Route
          path="/initialhealthcareseekingpathway-1"
          element={<FormB17 />}
        />
        <Route
          path="/initialhealthcareseekingpathway-2"
          element={<FormB18 />}
        />
        <Route
          path="/initialhealthcareseekingpathway-3"
          element={<FormB19 />}
        />
        <Route
          path="/initialhealthcareseekingpathway-4"
          element={<FormB19b />}
        />
        <Route path="/referral-facility1" element={<FormC20 />} />
        <Route path="/referral-facility2" element={<FormC21 />} />
        <Route path="/referral-facility3" element={<FormC22 />} />
        <Route path="/referral-facility4" element={<FormC23 />} />
        <Route path="/barriers-and-facilitators1" element={<FormD24 />} />
        <Route path="/barriers-and-facilitators2" element={<FormD25 />} />
        <Route path="/costing" element={<FormE26 />} />
        <Route path="/verbal-&-social-autopsy1" element={<FormF27 />} />
        <Route path="/verbal-&-social-autopsy2" element={<FormF28 />} />
        <Route path="/improve-emergency-services" element={<FormG29 />} />
        <Route path="/household-schedule1" element={<FormH30 />} />
        <Route path="/household-schedule2" element={<FormH31 />} />
        <Route path="/siteinformation" element={<FormA1 />} />
        <Route path="/clusterinformation" element={<FormA2 />} />
        <Route path="/linelistingofhouseholdmembers-1" element={<FormA3 />} />
        <Route path="/linelistingofhouseholdmembers-2" element={<FormA4 />} />
        <Route path="/linelistingofhouseholdmembers-3" element={<FormA5 />} />
        <Route path="/linelistingofhouseholdmembers-4" element={<FormA5a />} />
        <Route path="/trauma" element={<FormA6 />} />
        <Route path="/burn" element={<FormA7 />} />
        <Route path="/stemi" element={<FormA8 />} />
        <Route path="/stroke" element={<FormA9 />} />
        <Route path="/acuterespiratoryillness" element={<FormA10 />} />
        <Route path="/maternalneonatalemergency" element={<FormA11 />} />
        <Route path="/snakebite" element={<FormA12 />} />
        <Route path="/poisoning" element={<FormA13 />} />
        <Route path="/others" element={<FormA14 />} />
        <Route path="/death" element={<FormA15 />} />
        <Route
          path="/socio-demographicprofileofthepatientinthehhwithemergencycondition"
          element={<FormB16 />}
        />
        <Route
          path="/initialhealthcareseekingpathway-1"
          element={<FormB17 />}
        />
        <Route
          path="/initialhealthcareseekingpathway-2"
          element={<FormB18 />}
        />
        <Route
          path="/initialhealthcareseekingpathway-3"
          element={<FormB19 />}
        />
        <Route
          path="/initialhealthcareseekingpathway-4"
          element={<FormB19b />}
        />
        <Route path="/referral-facility1" element={<FormC20 />} />
        <Route path="/referral-facility2" element={<FormC21 />} />
        <Route path="/referral-facility3" element={<FormC22 />} />
        <Route path="/referral-facility4" element={<FormC23 />} />
        <Route path="/barriers-and-facilitators1" element={<FormD24 />} />
        <Route path="/barriers-and-facilitators2" element={<FormD25 />} />
        <Route path="/costing" element={<FormE26 />} />
        <Route path="/verbal-&-social-autopsy1" element={<FormF27 />} />
        <Route path="/verbal-&-social-autopsy2" element={<FormF28 />} />
        <Route path="/improve-emergency-services" element={<FormG29 />} />
        <Route path="/household-schedule1" element={<FormH30 />} />
        <Route path="/household-schedule2" element={<FormH31 />} />

        {/* BELOW are HFAT-1 */}

        <Route path="/healthfacilityinformation" element={<FormA />} />
        <Route path="/infrastructure" element={<FormB />} />
        <Route path="/humanresources" element={<FormC />} />
        <Route
          path="/logisticsdrugsconsumablesequipment-1"
          element={<FormD />}
        />
        <Route
          path="/logisticsdrugsconsumablesequipment-2"
          element={<FormD1 />}
        />
        <Route path="/emergencycareservices" element={<FormE />} />
        <Route path="/informationsystem" element={<FormF />} />
        <Route path="/finance" element={<FormG />} />
        <Route path="/leadershipandgovernance" element={<FormH />} />
        <Route path="/processpoliciessops" element={<FormI />} />
        <Route path="/referrallinkages" element={<FormJ />} />
        <Route path="/healthfacilityinformation" element={<FormA />} />
        <Route path="/infrastructure" element={<FormB />} />
        <Route path="/humanresources" element={<FormC />} />
        <Route
          path="/logisticsdrugsconsumablesequipment-1"
          element={<FormD />}
        />
        <Route
          path="/logisticsdrugsconsumablesequipment-2"
          element={<FormD1 />}
        />
        <Route path="/emergencycareservices" element={<FormE />} />
        <Route path="/informationsystem" element={<FormF />} />
        <Route path="/finance" element={<FormG />} />
        <Route path="/leadershipandgovernance" element={<FormH />} />
        <Route path="/processpoliciessops" element={<FormI />} />
        <Route path="/referrallinkages" element={<FormJ />} />

        {/* BELOW are HFAT-2 */}

        <Route path="/facilityinformation-2" element={<Form2A />} />
        <Route path="/infrastructure-2" element={<Form2B />} />
        <Route path="/humanresources-2" element={<Form2C />} />
        <Route path="/logistics-2" element={<Form2D />} />
        <Route path="/logistics-2-1" element={<Form2D2 />} />
        <Route path="/emergencycareservices-2" element={<Form2E />} />
        <Route path="/informationsystem-2" element={<Form2F />} />
        <Route path="/finance-2" element={<Form2G />} />
        <Route path="/leadershipandgovernance-2" element={<Form2H />} />
        <Route path="/processpoliciessops-2" element={<Form2I />} />
        <Route path="/referrallinkages-2" element={<Form2J />} />
        <Route path="/facilityinformation-2" element={<Form2A />} />
        <Route path="/infrastructure-2" element={<Form2B />} />
        <Route path="/humanresources-2" element={<Form2C />} />
        <Route path="/logistics-2" element={<Form2D />} />
        <Route path="/logistics-2-1" element={<Form2D2 />} />
        <Route path="/emergencycareservices-2" element={<Form2E />} />
        <Route path="/informationsystem-2" element={<Form2F />} />
        <Route path="/finance-2" element={<Form2G />} />
        <Route path="/leadershipandgovernance-2" element={<Form2H />} />
        <Route path="/processpoliciessops-2" element={<Form2I />} />
        <Route path="/referrallinkages-2" element={<Form2J />} />

        {/* BELOW are HFAT-3 */}

        <Route path="/facilityinformation-3" element={<Form3A />} />
        <Route path="/infrastructure-3" element={<Form3B />} />
        <Route path="/humanresources-3" element={<Form3C />} />
        <Route path="/logistics-3" element={<Form3D />} />
        <Route path="/logistics-3-1" element={<Form3D2 />} />
        <Route path="/emergencycareservices-3" element={<Form3E />} />
        <Route path="/informationsystem-3" element={<Form3F />} />
        <Route path="/finance-3" element={<Form3G />} />
        <Route path="/leadershipandgovernance-3" element={<Form3H />} />
        <Route path="/processpoliciessops-3" element={<Form3I />} />
        <Route path="/referrallinkages-3" element={<Form3J />} />
        <Route path="/facilityinformation-3" element={<Form3A />} />
        <Route path="/infrastructure-3" element={<Form3B />} />
        <Route path="/humanresources-3" element={<Form3C />} />
        <Route path="/logistics-3" element={<Form3D />} />
        <Route path="/logistics-3-1" element={<Form3D2 />} />
        <Route path="/emergencycareservices-3" element={<Form3E />} />
        <Route path="/informationsystem-3" element={<Form3F />} />
        <Route path="/finance-3" element={<Form3G />} />
        <Route path="/leadershipandgovernance-3" element={<Form3H />} />
        <Route path="/processpoliciessops-3" element={<Form3I />} />
        <Route path="/referrallinkages-3" element={<Form3J />} />

        {/* Ambulance */}
        <Route path="/facilityinformation" element={<Facility />} />

        {/* Bellow Are Verbal Autopsy Took*/}
        {/* Details of Responent */}
        <Route path="/formfa" element={<FormFA />} />

        {/* Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
  );
}

export default App;

export default App;

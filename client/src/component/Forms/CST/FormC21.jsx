import SidePanel from './SidePanelCST.jsx';
import Checkbox from '../child-comp/Checkbox.jsx';
import Radio from '../child-comp/Radio.jsx';
import { Link } from 'react-router-dom';
import "../Form.css"
import React, { useEffect, useState } from 'react'
import Buttons from '../child-comp/Buttons.jsx';
import InputField from '../child-comp/InputField.jsx';
import { turnOffbutton, handleChange } from '../helpers.js';
import setLocalStorage from '../setLocalStorage.js';
import Heading from '../../Heading/Heading';
import Table from '../child-comp/Table.jsx'
import DropDown from '../child-comp/DropDown.jsx';
import Table1 from '../child-comp/Table1.jsx';
import CSTButton from '../child-comp/CSTButton.jsx';
import useFormValidation from '../../../utils/custom_validation_hook.js';
import OverlayCard from '../OverlayCard.jsx';

function FormC21() {
  var formc21 = setLocalStorage("formc21", { C5: "", C6: "", C7: "" })
  const [formC21, setFormC21] = useState(JSON.parse(formc21))
  turnOffbutton();

  const [isSidebarVisible, setSidebarVisible] = useState(
    window.innerWidth > 1024
  );

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const handleResize = () => {
    if (window.innerWidth >= 1025) {
      setSidebarVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // AOS.init({ duration: 2000 });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (formC21.C6 !== "Government ambulance") {
      setFormC21({ ...formC21, C7: "" })
    }
  }, [formC21.C6])

  const { isValid, errors, setErrors } = useFormValidation(formC21, [
    "C5",
    "C6",
    ...(formC21.C6 === "Government ambulance" ? ["C7"] : [])
  ]);

  return (
    <div>
      <div className="header">
        <div className="burger-menu" onClick={toggleSidebar}>
          &#9776;
        </div>
        <Heading h2="Community Survey Tool"></Heading>
      </div>
      <section id='site-info' className="form-main">
        {isSidebarVisible && (
          <>
            <SidePanel id={"21"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}

        <div className='siteInfo'>
          <div className="formhdr">
            <div>
              <h2>A Socio-demographic Characteristics</h2>
            </div>
            <div>
              <h3>
                Referral Facility
              </h3>
            </div>
          </div>

          <div className="formcontent ">

            <Radio onClick={handleChange(setFormC21)} h3="C.5 How did you or the patient reach the referred health care facility?" CheckbobItems={["Own vehicle", "Hired vehicle ", "Ambulance", "Neighbour’s Vehicle", "Passer-by’s Vehicle", "Others"]} name="C5" setter={setFormC21} otherArray={[0, 0, 0, 0, 0, 1]} byDefault={formC21.C5} />

            <Radio onClick={handleChange(setFormC21)} h3="C.6 What type of transport was used to reach the referred health care facility?" CheckbobItems={["Government ambulance", "Private ambulance",
              "Ambulance service provided by NGO", "Two-Wheeler (Bicycle)", "Two-Wheeler (Motorcycle)", "Three-Wheeler (Manual Rickshaw, etc.)", "Three-Wheeler (Auto Rickshaw/ E-rickshaw, etc.)", "Four-Wheeler (Car/Jeep/ etc.)", "Agricultural Vehicle (Tractor)", "Others"]} name="C6" setter={setFormC21} otherArray={[0, 0, 0, 0, 0, 0, 0, 0, 1]} byDefault={formC21.C6} />

            {
              (formC21.C6 === "Government ambulance") &&
              <>
                <Radio onClick={handleChange(setFormC21)} h3="C.7  If Govt. Ambulance, Which ambulance service you opted for?" CheckbobItems={["102", "108", "Other", "Don’t know"]} name="C7" otherArray={[0, 0, 1, 0]} setter={setFormC21} byDefault={formC21.C7} />
              </>
            }


            <div className="button-container">
              <CSTButton formName="formc21" formData={formC21} prev="/referral-facility1" next="/referral-facility3" prevText="Previous" nextText="Save & Next" />
              <OverlayCard
                isVisible={!isValid}
                message="(Please fill all required fields to proceed)"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormC21
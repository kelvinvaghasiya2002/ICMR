import React, { useState, useEffect } from 'react'
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';
import LastButton from '../child-comp/LastButton.jsx';
import { validateName, validateNumber, validateRequired, validateEmail } from '../fv.js';
import OverlayCard from '../OverlayCard.jsx';

function Form3J() {
  turnOffbutton();
  var form3j = setLocalStorage("form3j",
    { H3J1: "", H3J2: "" })

  const [form3J, setForm3J] = useState(JSON.parse(form3j));
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);

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

  const validateForm = () => {
    const newErrors = {};

    setErrors(newErrors);
    setShowOverlay(Object.keys(newErrors).some(key => newErrors[key] !== undefined));
  };


  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach(field => {
        newErrors[field] = validateRequired(form3J[field]);
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [form3J]);

  const isFormValid = () => {
    const requiredFields = ['H3J1', 'H3J2'];
    const missingFields = requiredFields.filter(field => !form3J[field] || (typeof form3J[field] === 'string' && form3J[field].trim() === ''));
    return { isValid: missingFields.length === 0, missingFields };
  };

  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach(field => {
        newErrors[field] = 'This field is required';
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [form3J]);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = '';

    switch (name) {
      default:
        break;
    }

    setForm3J(prevValue => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      default:
        break;
    }

    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };

  return (
    <div>
      <div className="header">
                <div className="burger-menu" onClick={toggleSidebar}>
                &#9776;
                </div>
                <Heading h2="Health Facility Assessment Tool 3: Primary Health Centre"></Heading>
      </div>
      <section className="form-main">
                {isSidebarVisible && (
                <>
                    <SidePanel id={"10"} />
                    <div className="grayedover" onClick={toggleSidebar}></div>
                </>
                )}
        <div className="siteInfo">

          <div className="formhdr">
            <div>
              <h3>
                3J. Referral Linkages
              </h3>
            </div>
          </div>

          <div className="formcontent cont_extra fbox">
            <div className="fbox1">

              <Radio byDefault={form3J.H3J1} onClick={handleChange(setForm3J)} name="H3J1" h3="3J.1 : Does this facility follow any policies and procedures which guide the transfer- out/referral of stable and unstable patients after stabilization to another facility? " CheckbobItems={["Yes", "No"]} />


              <Radio byDefault={form3J.H3J2} onClick={handleChange(setForm3J)} name="H3J2" h3="3J.2 : Do you any documented SOP/STW guiding the referral linkages?" CheckbobItems={["Yes", "No"]} />

            </div>
            {/* <Buttons formName="form3j" formData={form3J} prevText="Previous" nextText="Submit" prev="/processpoliciessops-3" next="" /> */}


            <div className="button-container">
              <LastButton prev="/processpoliciessops-3" formName="form3j" formData={form3J} MainForm={"HFAT-3"} formType="hfat3" />

              <OverlayCard
                isVisible={showOverlay}
                message="Please fill all required fields to proceed."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Form3J
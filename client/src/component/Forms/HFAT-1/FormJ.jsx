import React, { useState, useEffect } from 'react';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import LastButton from '../child-comp/LastButton';
import Heading from '../../Heading/Heading.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { validateName, validateNumber, validateRequired, validateEmail } from '../fv.js';
import OverlayCard from '../OverlayCard.jsx';

function FormJ() {

  
  // --toggle--
  const [isSidebarVisible, setSidebarVisible] = useState(window.innerWidth > 1024);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const handleResize = () => {
    if (window.innerWidth >= 1025) {
      setSidebarVisible(true);
    }
  };

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  // --toggle end--

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    AOS.init({ duration: 2000 })
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  turnOffbutton();
  const formj = setLocalStorage("formj", { H1J1: "", H1J2: "" });
  const [formJ, setFormJ] = useState(JSON.parse(formj));
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    // if (!formJ.H1J1) newErrors.H1J1 = "This field is required";
    // if (!formJ.H1J2) newErrors.H1J2 = "This field is required";
    // setErrors(newErrors);
    // return Object.keys(newErrors).length === 0;
    setErrors(newErrors);
    setShowOverlay(Object.keys(newErrors).some(key => newErrors[key] !== undefined));
  };

  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach(field => {
        newErrors[field] = validateRequired(formJ[field]);
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [formJ]);

  const isFormValid = () => {
    const requiredFields = ['H1J1', 'H1J2'];
    const missingFields = requiredFields.filter(field => !formJ[field] || (typeof formJ[field] === 'string' && formJ[field].trim() === ''));
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
  }, [formJ]);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = '';

    switch (name) {
      default:
        break;
    }

    setFormJ(prevValue => ({ ...prevValue, [name]: validatedValue }));

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
        <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)"></Heading>
      </div>
      <section className="form-main">
        {isSidebarVisible && (
          <>
            <SidePanel id={"10"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"10"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>1J. Referral Linkages</h3>
            </div>
          </div>
          <div className="formcontent cont_extra fbox">
            <div className="fbox1">
              <Radio
                byDefault={formJ.H1J1}
                onClick={handleChange(setFormJ)}
                name="H1J1"
                h3="1J.1 : Does this facility have policies and procedures which guide the referral of patients from other hospitals?"
                CheckbobItems={["Yes", "No"]}
                errorMsg={errors.H1J1}
              />
              <Radio
                byDefault={formJ.H1J2}
                onClick={handleChange(setFormJ)}
                name="H1J2"
                h3="1J.2 : Does this facility have any policies and procedures which guide the transfer- out/referral of stable and unstable patients after stabilization to another facility with documentation?"
                CheckbobItems={["Yes", "No"]}
                errorMsg={errors.H1J2}
              />
            </div>

            <div className="button-container">
              <LastButton
                formName="formj"
                formData={formJ}
                prev="/processpoliciessops"
                MainForm={"HFAT-1"}
              // validateForm={validateForm}
              />

              <OverlayCard
                isVisible={showOverlay}
                message="(Please fill all required fields to proceed)"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormJ;

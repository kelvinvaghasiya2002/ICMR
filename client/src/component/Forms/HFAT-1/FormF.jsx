import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading';
import { validateName, validateNumber, validateRequired, validateEmail } from '../fv.js';
import OverlayCard from '../OverlayCard.jsx';

function FormF() {
  
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

  var formf = setLocalStorage("formf",
    { H1F1: "", H1F2: "", H1F3: "", H1F4: [], H1F5: "", H1F6: [], H1F7: "", H1F8: "", H1F9: "" });

  const [formF, setFormF] = useState(JSON.parse(formf));
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (formF.H1F5 === "No") {
      setFormF((prevValue) => ({
        ...prevValue,
        H1F6: []
      }));
    }

    if (formF.H1F1 === "No") {
      setFormF((prevValue) => ({
        ...prevValue,
        H1F2: "",
        H1F7: ""
      }));
    }
  }, [formF.H1F5, formF.H1F1]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    AOS.init({ duration: 2000 })
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  turnOffbutton();

  const validateForm = () => {
    const newErrors = {};

    if (!formF.H1F1) newErrors.H1F1 = 'Required to check the facility have a Hospital Management Information System (HMIS)';
    if (formF.H1F1 === 'Yes' && !formF.H1F2 && !formF.H1F7) {
      newErrors.H1F2 = 'Required to check facility do complete reporting of indicators on emergency care in HMIS';
      newErrors.H1F7 = 'Required to check Whether hospital administrators/ Medical Superintendent uses or reviews the data for quality improvement';
    }

    newErrors.H1F3 = validateNumber(formF.H1F3) || validateRequired(formF.H1F3)

    if (!formF.H1F5) newErrors.H1F5 = 'Time bound is required';
    if (formF.H1F5 === 'Yes' && !formF.H1F6) newErrors.H1F6 = 'Required to add Time and Date';

    setErrors(newErrors);
    setShowOverlay(Object.keys(newErrors).some(key => newErrors[key] !== undefined));
    // let error = "";

    // if (!formF.H1F1) {
    //   error = "1F.1 is required";
    // } else if (formF.H1F1 === "Yes" && !formF.H1F2) {
    //   error = "1F.2 is required";
    // } else if (!formF.H1F3) {
    //   error = "1F.3 is required";
    // } else if (formF.H1F4.filter(item => item !== "").length === 0) {
    //   error = "Select at least one key indicator in section 1F.4";
    // } else if (!formF.H1F5) {
    //   error = "1F.5 is required";
    // } else if (formF.H1F5 === "Yes" && formF.H1F6.filter(item => item !== "").length === 0) {
    //   error = "Select at least one time bound management option in section 1F.6";
    // } else if (formF.H1F1 === "Yes" && !formF.H1F7) {
    //   error = "1F.7 is required";
    // } else if (!formF.H1F8) {
    //   error = "1F.8 is required";
    // } else if (!formF.H1F9) {
    //   error = "1F.9 is required";
    // }

    // setFormError(error);
    // return !error;
  };

  // const handleNext = () => {
  //   if (validateForm()) {
  //     // Proceed to next page logic here
  //     console.log("Form is valid, proceed to next page");
  //     // Implement navigation logic here
  //   } else {
  //     // Display errors or prevent navigation
  //     console.error("Form validation failed");
  //     // Optionally, display errors to the user
  //   }
  // };

  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach(field => {
        newErrors[field] = validateRequired(formF[field]);
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [formF]);

  const isFormValid = () => {
    const requiredFields = ['H1F1', 'H1F3', 'H1F4', 'H1F5', 'H1F6', 'H1F8', 'H1F9'];
    if (formF.H1F5 === "Yes") {
      requiredFields.push('H1F6');
    }
    const missingFields = requiredFields.filter(field => !formF[field] || (typeof formF[field] === 'string' && formF[field].trim() === ''));
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
  }, [formF]);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = '';

    switch (name) {
      case 'H1F3':
        error = validateName(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formF[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      default:
        break;
    }

    setFormF(prevValue => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case 'H1F3':
        error = error || validateRequired(validatedValue);
        break;
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
            <SidePanel id={"6"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"6"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>
                1F. Information System
              </h3>
            </div>
          </div>

          <div className="formcontent">
            <Radio
              byDefault={formF.H1F1}
              onClick={handleChange(setFormF)}
              name="H1F1"
              h3="1F.1 : Does the facility have a Hospital Management Information System (HMIS)"
              CheckbobItems={["Yes", "No"]}
            />

            {formF.H1F1 === "Yes" && (
              <Radio
                byDefault={formF.H1F2}
                onClick={handleChange(setFormF)}
                name="H1F2"
                h3="1F.2 : Does this facility do complete reporting of indicators on emergency care in HMIS?"
                CheckbobItems={["Yes", "No"]}
              />
            )}

            <InputField
              value={formF.H1F3}
              onChange={handleChangeWithValidation}
              name="H1F3"
              h3="1F.3 : How many personnel are available for managing information system?"
              placeholder="Type here"
              required
            />

            <Checkbox
              name="H1F4"
              h3="1F.4 : What key indicators are generated from the emergency management information system?"
              CheckbobItems={["Numbers by type of emergencieses", "Length of hospital stay", "Turnaround time", "Disposal time", "Number of deaths", "Number of Referrals (in-house referrals and to other hospitals)"]}
              StateValue={formF}
              setFunction={setFormF}
              array={formF.H1F4}
            />

            <Radio
              byDefault={formF.H1F5}
              onClick={handleChange(setFormF)}
              name="H1F5"
              h3="1F.5 : Whether time bound management of common emergencies is captured in MIS. For example, Door to CT/ECG time, Door to needle time, Time to activate emergency alert team."
              CheckbobItems={["Yes", "No"]}
            />

            {formF.H1F5 === "Yes" && (
              <Checkbox
                setFunction={setFormF}
                StateValue={formF}
                array={formF.H1F6}
                name="H1F6"
                h3="1F.6 : If yes, select all that apply and provide their value"
                CheckbobItems={["Door to CT/ECG time:-  ", "Door to needle time:- ", "Time to activate emergency alert team:- "]}
                time={true}
              />
            )}

            {formF.H1F1 === "Yes" && (
              <Radio
                byDefault={formF.H1F7}
                onClick={handleChange(setFormF)}
                name="H1F7"
                h3="1F.7 : Whether hospital administrators/ Medical Superintendent uses or reviews the data for quality improvement"
                CheckbobItems={["Yes", "No"]}
              />
            )}

            <Radio
              byDefault={formF.H1F8}
              onClick={handleChange(setFormF)}
              name="H1F8"
              h3="1F.8 : Do you get Pre-Hospital Notification during an emergency?"
              CheckbobItems={["Yes", "No"]}
            />

            <Radio
              byDefault={formF.H1F9}
              onClick={handleChange(setFormF)}
              name="H1F9"
              h3="1F.9 : Infrastructure for receiving internal communication?"
              CheckbobItems={["Yes", "No"]}
            />

            <div className="button-container">
            <Buttons
              formName="formf"
              formData={formF}
              prevText="Previous"
              nextText="Save & Next"
              prev="/emergencycareservices"
              next="/finance"
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

export default FormF;

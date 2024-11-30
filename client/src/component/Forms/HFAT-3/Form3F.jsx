import React, { useEffect, useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';
import { validateName, validateNumber, validateRequired, validateEmail } from '../fv.js';
import OverlayCard from '../OverlayCard.jsx';

function Form3F() {
  turnOffbutton();

  var form3f = setLocalStorage("form3f",
    { H3F1: "", H3F2: "", H3F3: "", H3F4: "", H3F5: "", H3F6: "", H3F7: "", H3F8: "" })

  const [form3F, setForm3F] = useState(JSON.parse(form3f));
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

  useEffect(() => {
    if (form3F.H3F1 === "No") {
      setForm3F((prevValue) => {
        return { ...prevValue, H3F2: "", H3F3: "", H3F4: "", H3F5: "" }
      })
    }

  }, [form3F.H3F1])

  const validateForm = () => {

    const newErrors = {};

    if (!form3F.H3F1 === 'Yes' && !form3F.H3F2 && !form3F.H3F3 && !form3F.H3F4 && !form3F.H3F5) {
        newErrors.H3F2 = "Required to fill facility do complete reporting of indicators on emergency care in HMIS";
        newErrors.H3F3 = validateNumber(form3F.H3F3) || validateRequired(form3F.H3F3);
        newErrors.H3F4 = "Required to fill key indicators are generated from the emergency management information system";
        newErrors.H3F5 = "Required to time bound management of common emergencies is captured in MIS.";
    }


    setErrors(newErrors);
    setShowOverlay(Object.keys(newErrors).some(key => newErrors[key] !== undefined));
};


useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
        const newErrors = {};
        missingFields.forEach(field => {
          console.log(field + "field");
          if(Array.isArray(form3F[field])){
            console.log(form3F[field]);
            newErrors[field] = validateCheckBox(form3F[field]);
          }else{
            newErrors[field] = validateRequired(form3F[field]);
          }
        });
        setErrors(newErrors);
    } else {
        setErrors({});
    }
}, [form3F]);


const isFormValid = () => {
    const requiredFields = ['H3F1','H3F6', 'H3F7', 'H3F8'];
    if (form3F.H3F1 === "Yes") {
        requiredFields.push('H3F2');
        requiredFields.push('H3F3');
        requiredFields.push('H3F4');
        requiredFields.push('H3F5');
    }
    const missingFields = requiredFields.filter(field => {
      if (Array.isArray(form3F[field])) {
      return form3F[field].every(item => item === '' || (typeof item === 'string' && item.trim() === ''));
      } else {
      return !form3F[field] || (typeof form3F[field] === 'string' && form3F[field].trim() === '');
      }
    });
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
}, [form3F]);

const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = '';

    switch (name) {
        case 'H3F3':
            error = validateNumber(value);
            if (!error) {
                validatedValue = value;
            } else {
                validatedValue = form3F[name];
                e.preventDefault(); // Prevent default behavior if the input was invalid
            }
            break;
        default:
            break;
    }

    setForm3F(prevValue => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
        case 'H3F3':
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
                <Heading h2="Health Facility Assessment Tool 3: Primary Health Centre"></Heading>
      </div>
      <section className="form-main">
                {isSidebarVisible && (
                <>
                    <SidePanel id={"6"} />
                    <div className="grayedover" onClick={toggleSidebar}></div>
                </>
                )}
        <div className="siteInfo">

          <div className="formhdr">
            <div>
              <h3>
                3F. Information System
              </h3>
            </div>
          </div>

          <div className="formcontent cont_extra fbox">
            <div className="fbox1">

              <Radio byDefault={form3F.H3F1} onClick={handleChange(setForm3F)} name="H3F1" h3="3F.1 : Does the facility have a Hospital   Management Information System (HMIS)" CheckbobItems={["Yes", "No"]} />

              {
                (form3F.H3F1 === 'Yes') &&
                <>
                  <Radio byDefault={form3F.H3F2} onClick={handleChange(setForm3F)} name="H3F2" h3="3F.2 : Does this facility do complete   reporting of indicators on emergency care in HMIS?" CheckbobItems={["Yes", "No"]} />

                  <InputField value={form3F.H3F3} onChange={handleChangeWithValidation} name="H3F3" h3="3F.3 : How many personnel are available for managing information system?" placeholder="Type here" />

                  <Radio byDefault={form3F.H3F4} onClick={handleChange(setForm3F)} name="H3F4" h3="3F.4 : What key indicators are generated from the emergency management information system?" CheckbobItems={["Numbers by type of emergencies", "Length of hospital stay", "Turnaround time", "Disposal time", "Number of deaths", "Number of Referrals"]} />

                  <Radio byDefault={form3F.H3F5} onClick={handleChange(setForm3F)} name="H3F5" h3="3F.5 : Whether time bound management of common emergencies is captured in MIS." CheckbobItems={["Yes", "No"]} />
                </>
              }


              <Radio byDefault={form3F.H3F6} onClick={handleChange(setForm3F)} name="H3F6" h3="3F.6 : Whether Medical Officer In charge (MO/IC) uses or reviews the data for quality improvement" CheckbobItems={["Yes", "No"]} />

              <Radio byDefault={form3F.H3F7} onClick={handleChange(setForm3F)} name="H3F7" h3="3F.7 : Do you get Pre-Hospital Notification during an emergency?" otherArray={[1, 0]} setter={setForm3F} CheckbobItems={["Yes(How often per week)", "No"]} />

              <Radio byDefault={form3F.H3F8} onClick={handleChange(setForm3F)} name="H3F8" h3="3F.8 : Infrastructure for receiving external communication?" CheckbobItems={["Yes", "No"]} />
            </div>

            <div className="button-container">
            <Buttons formName="form3f" formData={form3F} prevText="Previous" nextText="Save & Next" prev="/emergencycareservices-3" next="/finance-3" 
            formType="hfat3"/>
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

export default Form3F
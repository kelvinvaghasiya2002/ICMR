import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading';
import { validateName, validateNumber, validateRequired, validateEmail } from '../fv.js';
import OverlayCard from '../OverlayCard.jsx';

function FormG() {

  var formg = setLocalStorage("formg",
    { H1G1: "", H1G2: "", H1G3: "", H1G4: "", H1G5: "" })

  const [formG, setFormG] = useState(JSON.parse(formg));
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);

  useEffect(() => {
    if (formG.H1G1 === "No") {
      setFormG((prevValue) => {
        return {
          ...prevValue,
          H1G2: "",
        }
      })
    }

    if (formG.H1G3 === "No") {
      setFormG((prevValue) => {
        return {
          ...prevValue,
          H1G4: ""
        }
      }
      )
    }
  }, [formG.H1G1, formG.H1G3])

  turnOffbutton();

  const validateForm = () => {
    const newErrors = {};

    newErrors.H1G5 = validateNumber(formG.H1G5) || validateRequired(formG.H1G5);

    if (formG.H1G1 === 'Yes' && !formG.H1G2) newErrors.H1G2 = 'Required to check whether this fund is utilized for providing emergency care services'
    if (formG.H1G3 === 'Yes' && !formG.H1G4) {
      newErrors.H1G4 = 'Required to check whether this fund is utilized for providing emergency care services'
      newErrors.H1G4 = validateRequired(formG.H1G4);
    }


    //   // Validate H1G1
    //   if (!formG.H1G1) {
    //     newErrors.H1G1 = "This field is required";
    // } else {
    //     // If H1G1 is "Yes", validate H1G2
    //     if (formG.H1G1 === "Yes" && !formG.H1G2) {
    //         newErrors.H1G2 = "This field is required";
    //     }
    // }

    // // Validate H1G3
    // if (!formG.H1G3) {
    //     newErrors.H1G3 = "This field is required";
    // } else {
    //     // If H1G3 is "Yes", validate H1G4
    //     if (formG.H1G3 === "Yes" && !formG.H1G4) {
    //         newErrors.H1G4 = "This field is required";
    //     }
    // }

    // // Validate H1G5
    // if (!formG.H1G5) {
    //     newErrors.H1G5 = "This field is required";
    // }

    //   setErrors(newErrors);
    //   return Object.keys(newErrors).length === 0;
    setErrors(newErrors);
    setShowOverlay(Object.keys(newErrors).some(key => newErrors[key] !== undefined));
  };

  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach(field => {
        newErrors[field] = validateRequired(formG[field]);
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [formG]);

  const isFormValid = () => {
    const requiredFields = ['H1G1', 'H1G3', 'H1G5'];
    if (formG.H1G1 === "Yes") {
      requiredFields.push('H1G2');
    }
    if (formG.H1G3 === "Yes") {
      requiredFields.push('H1G4');
    }
    const missingFields = requiredFields.filter(field => !formG[field] || (typeof formG[field] === 'string' && formG[field].trim() === ''));
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
  }, [formG]);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = '';

    switch (name) {
      case 'H1G5':
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formG[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      case 'H1G4':
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        }
        else {
          validatedValue = formG[name];
          e.preventDefault();
        }
        break;
      default:
        break;
    }

    setFormG(prevValue => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case 'H1G5':
        error = error || validateRequired(validatedValue);
        break;
      case 'H1G4':
        error = error || validateRequired(validatedValue) || validateNumber(validatedValue);
        break;
      default:
        break;
    }

    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };


  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)"></Heading>
      <section>
        <SidePanel id={"7"} />
        <div className="siteInfo" data-aos="fade-left">

          <div className="formhdr">
            <div>
              <h3>
                1G. Finance </h3>
            </div>
          </div>

          <div className="formcontent cont_extra">

            <Radio byDefault={formG.H1G1} onClick={handleChange(setFormG)} name="H1G1" h3="1G.1 : Whether any untied fund is available at your hospital?" CheckbobItems={["Yes", "No"]} errorMsg={errors.H1G1} />

            {
              (formG.H1G1 === "Yes") &&
              <Radio byDefault={formG.H1G2} onClick={handleChange(setFormG)} name="H1G2" h3="1G.2 : If yes, whether this fund is utilized for providing emergency care services?" CheckbobItems={["Yes", "No"]}
                errorMsg={errors.H1G2} />
            }

            <Radio byDefault={formG.H1G3} onClick={handleChange(setFormG)} name="H1G3" h3="1G.3 : Whether any fund is available for emergency care?" CheckbobItems={["Yes", "No"]}
              errorMsg={errors.H1G3} />

            {
              (formG.H1G3 === "Yes") &&
              <InputField value={formG.H1G4} onChange={handleChangeWithValidation} name="H1G4" h3="1G.4 : If yes, which health schemes are covering your emergency care system?" placeholder="Type here" regex={/^[A-Za-z ]+$/}
                errorMsg={errors.H1G4} />
            }

            <InputField value={formG.H1G5} onChange={handleChangeWithValidation} name="H1G5" h3="1G.5 : Out of total patients being provided emergency care, how many were provided services under PMJAY scheme/ any other insurance scheme." placeholder="Type here" errorMsg={errors.H1G5}
              required={true} />


            <div className="button-container">
              <Buttons
                formName="formg"
                formData={formG}
                prevText="Previous"
                nextText="Save & Next"
                prev="/informationsystem"
                next="/leadershipandgovernance"
                // validateForm={validateForm}
              />
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

export default FormG
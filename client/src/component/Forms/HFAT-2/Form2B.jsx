import React, { useState, useEffect } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { validateName, validateNumber, validateRequired, validateEmail } from '../fv.js';
import OverlayCard from '../OverlayCard.jsx';

function Form2B() {

  useEffect(()=> {
    AOS.init({duration:2000})
  }, []);

  turnOffbutton();
  var form2b = setLocalStorage("form2b",
  {H2B1: "",H2B2: "",H2B3: "",H2B4: "",H2B5: "",H2B6: "",H2B7: [], H2B8: [""],H2B9: "",H2B10: ""})

  const [form2B, setForm2B] = useState(JSON.parse(form2b));
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (form2B.H2B3 === "No") {
      setForm2B((prevValue) => {
        return { ...prevValue, H2B4: "" }
      })
    }

    if (form2B.H2B9 === "No") {
      setForm2B((prevValue) => {
        return { ...prevValue, H2B10: "" }
      })
    }
  }, [form2B.H2B3, form2B.H2B9]);

  const validateForm = () => {
    const newErrors = {};

    newErrors.H2B2 = validateNumber(form2B.H2B2) || validateRequired(form2B.H2B2);
    newErrors.H2B5 = validateNumber(form2B.H2B5) || validateRequired(form2B.H2B5);
    newErrors.H2B6 = validateNumber(form2B.H2B6) || validateRequired(form2B.H2B6);
    newErrors.H2B10 = validateName(form2B.H2B10) || validateRequired(form2B.H2B10);

    if(form2B.H2B3 === "Yes" && !form2B.H2B4){
      newErrors.H2B4 = validateNumber(form2B.H2B4) || validateRequired(form2B.H2B4);
      newErrors.H2B4 = "Required to fill numbers of beds are available for emergency care";
    }

    if(form2B.H2B9 === "No" && !form2B.H2B10){
      newErrors.H2B10 = validateRequired(form2B.H2B10);
      newErrors.H2B10 = "Required to fill numbers of beds are available for emergency care";
    }


    // if (!form2B.H2B1) newErrors.H2B1 = "This field is required";
    // if (!form2B.H2B2) newErrors.H2B2 = "This field is required";
    // if (!form2B.H2B3) newErrors.H2B3 = "This field is required";
    // if (form2B.H2B3 === "Yes" && !form2B.H2B4) newErrors.H2B4 = "This field is required";
    // if (!form2B.H2B5) newErrors.H2B5 = "This field is required";
    // if (!form2B.H2B6) newErrors.H2B6 = "This field is required";
    // if (form2B.H2B7.length === 0) newErrors.H2B7 = "This field is required";
    // if (form2B.H2B8.length === 0 || (form2B.H2B8.includes("Other") && !form2B.H2B8Other)) newErrors.H2B8 = "This field is required";
    // if (!form2B.H2B9) newErrors.H2B9 = "This field is required";
    // if (form2B.H2B9 === "No" && !form2B.H2B10) newErrors.H2B10 = "This field is required";
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
        newErrors[field] = validateRequired(form2B[field]);
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [form2B]);

  const isFormValid = () => {
    const requiredFields = ['H2B1', 'H2B2', 'H2B3', 'H2B5', 'H2B6', 'H2B7', 'H2B8', 'H2B9'];
    if (form2B.H2B3 === "Yes") {
      requiredFields.push('H2B4');
    }
    if (form2B.H2B9 === "No") {
      requiredFields.push('H2B10');
    }
    const missingFields = requiredFields.filter(field => !form2B[field] || (typeof form2B[field] === 'string' && form2B[field].trim() === ''));
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
  }, [form2B]);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = '';

    switch (name) {
      case 'H2B10':
        error = validateName(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = form2B[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      case 'H2B2':
      case 'H2B4':
      case 'H2B5':
      case 'H2B6':
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formB[name];
          e.preventDefault();
        }
        break;
      default:
        break;
    }

    setForm2B(prevValue => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case 'H2B2':
      case 'H2B4':
      case 'H2B5':
      case 'H2B6':
        error = error || validateRequired(validatedValue);
        break;
      default:
        break;
    }

    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };

  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 2: Community Health Centre"></Heading>
      <section>
        <SidePanel id={"2"} />
        <div className="siteInfo" data-aos="fade-left" >
          <div className="formhdr">
            <div>
              <h3>2B. Infrastructure</h3>
            </div>
          </div>

          <div className="formcontent">
            <Radio 
              h3="2B.1 : Is the CHC 24/7?" 
              CheckbobItems={["Yes", "No"]} 
              name="H2B1" 
              byDefault={form2B.H2B1} 
              onClick={handleChange(setForm2B)} 
              // required
              // errorMsg={errors.H2B1}
            />

            <InputField 
              h3="2B.2 : How many beds are available for the in-patient department (IPD)?" 
              placeholder="Type here" 
              name="H2B2" 
              value={form2B.H2B2} 
              // type={"number"}
              onChange={handleChangeWithValidation} 
              required
              errorMsg={errors.H2B2}
            />

            <Radio 
              h3="2B.3 : Is there any dedicated bed present for emergency care?" 
              CheckbobItems={["Yes", "No"]} 
              name="H2B3" 
              byDefault={form2B.H2B3} 
              onClick={handleChange(setForm2B)} 
              // required
              // errorMsg={errors.H2B3}
            />

            {
              (form2B.H2B3 === "Yes") &&
              <InputField 
                h3="2B.4 : How many beds are available for emergency care?" 
                placeholder="Type here" 
                name="H2B4" 
                value={form2B.H2B4} 
                type={"number"}
                onChange={handleChangeWithValidation} 
                // required
                errorMsg={errors.H2B4}
              />
            }

            <InputField 
              h3="2B.5 : What is the average number of patients presenting to OPD per month?" 
              placeholder="Type here" 
              name="H2B5" 
              value={form2B.H2B5} 
              onChange={handleChangeWithValidation} 
              required
              errorMsg={errors.H2B5}
            />

            <InputField 
              h3="2B.6 : What is the average daily number of patients presenting with emergency conditions daily?" 
              p="(Chest pain, stroke, acute weakness, acute blindness, Shortness of breath, altered mentation, snake bite, bites, road traffic accident, injuries, poisoning, deliberate self-harm, infectious diseases, fever, pregnancy related, seizure, acute abdomen, anaphylaxis, cerebro-meningeal infections, foreign body, acute pulmonary disease, Shock, accidental injuries, infections)" 
              placeholder="Type here" 
              name="H2B6" 
              value={form2B.H2B6} 
              onChange={handleChangeWithValidation} 
              required
              errorMsg={errors.H2B6}
            />

            <Checkbox 
              h3="2B.7 : Which of the following infrastructure requirements for emergency are available at the CHC?" 
              CheckbobItems={["Emergency Registration Counter","Computerized Registration","Triage Area","Resuscitation Area","Decontamination Facility","Security Services","Designated Parking Area for Ambulance","Smooth Entry for Wheelchair Trolley and Stretcher Bay","Waiting Area for patients & Attendants.","Plaster Room/Suturing Room/Minor OT","Emergency OT","Dedicated Isolation rooms","Point of Care Lab","Blood storage unit","Point of care ultrasound","Radiology service-X ray, Ultrasound","Demarcated Duty Rooms for Doctors and Nurses","Area to Keep Dead Bodies","Tele-Medicine Facility"]} 
              name="H2B7" 
              setFunction={setForm2B}
              StateValue={form2B}
              array={form2B.H2B7}
              // required
              errorMsg={errors.H2B7}
            />

            <Checkbox 
              h3="2B.8 : Which of these signage or display boards of the emergency services and entitlements are available in its departments?" 
              CheckbobItems={["Services provided to the patients are clearly defined, displayed prominently.","Names of doctor and nursing staff on duty are displayed and updated.","List of available drugs are displayed.","All relevant information is displayed for the patients and visitors including user charges wherever applicable at the time of procedure/ investigation/admission.","Important contact numbers including ambulance, blood bank, police and referral centers displayed.","Display of citizen’s charter"]} 
              other={true} 
              name="H2B8" 
              setFunction={setForm2B}
              StateValue={form2B}
              array={form2B.H2B8} 
              // required
              errorMsg={errors.H2B8}
            />

            <Radio 
              h3="2B.9 : Does this hospital provide ambulance services?" 
              CheckbobItems={["Yes", "No"]} 
              name="H2B9" 
              byDefault={form2B.H2B9} 
              onClick={handleChange(setForm2B)} 
              // required
              // errorMsg={errors.H2B9}
            />

            {
              (form2B.H2B9 === 'No')  &&
              <InputField 
                h3="2B.10 : If ambulances are not there, how are patients transferred?" 
                placeholder="Type here" 
                name="H2B10" 
                value={form2B.H2B10} 
                onChange={handleChangeWithValidation} 
                // required
                errorMsg={errors.H2B10}
              />
            }


            <div className="button-container">
            <Buttons formData={form2B} formName="form2b" prevText="Previous" nextText="Save & Next" prev="/facilityinformation-2" next="/humanresources-2" 
            //validateForm={validateForm} 
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
  );
}

export default Form2B;

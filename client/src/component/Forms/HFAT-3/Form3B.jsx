import React, { useEffect, useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';
import { validateName, validateNumber, validateRequired, validateEmail, validateCheckBox } from '../fv.js';
import OverlayCard from '../OverlayCard.jsx';

function Form3B() {

  turnOffbutton();
  var form3b = setLocalStorage("form3b",
    { H3B1: "", H3B2: "", H3B3: "", H3B4: "", H3B5: "", H3B6: "", H3B7: [], H3B8: [], H3B9: "", H3B10: "" })

  const [form3B, setForm3B] = useState(JSON.parse(form3b));
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
    if (form3B.H3B3 === "No") {
      setForm3B((prevValue) => {
        return { ...prevValue, H3B4: "" }
      })
    }

    if (form3B.H3B9 === "No") {
      setForm3B((prevValue) => {
        return { ...prevValue, H3B10: "" }
      })
    }

  }, [form3B.H3B9])


  const validateForm = () => {
    const newErrors = {};

    newErrors.H3B2 = validateNumber(form3B.H3B2) || validateRequired(form3B.H3B2);
    newErrors.H3B5 = validateNumber(form3B.H3B5) || validateRequired(form3B.H3B5);
    newErrors.H3B6 = validateNumber(form3B.H3B6) || validateRequired(form3B.H3B6);
    newErrors.H3B10 = validateName(form3B.H3B10) || validateRequired(form3B.H3B10);

    if (form3B.H3B3 === "Yes" && !form3B.H3B4) {
      newErrors.H3B4 = validateNumber(form3B.H3B4) || validateRequired(form3B.H3B4);
      newErrors.H3B4 = "Required to fill numbers of beds are available for emergency care";
    }

    if (form3B.H3B9 === "No" && !form3B.H3B10) {
      newErrors.H3B10 = validateRequired(form3B.H3B10);
      newErrors.H3B10 = "Required to fill numbers of beds are available for emergency care";
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
        if(Array.isArray(form3B[field])){
          console.log(form3B[field]);
          newErrors[field] = validateCheckBox(form3B[field]);
        }else{
          newErrors[field] = validateRequired(form3B[field]);
        }
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [form3B]);

  const isFormValid = () => {
    const requiredFields = ['H3B1', 'H3B2', 'H3B3', 'H3B5', 'H3B6', 'H3B7', 'H3B8', 'H3B9'];
    if (form3B.H3B3 === "Yes") {
      requiredFields.push('H3B4');
    }
    if (form3B.H3B9 === "No") {
      requiredFields.push('H3B10');
    }
    const missingFields = requiredFields.filter(field => {
      if (Array.isArray(form3B[field])) {
      return form3B[field].every(item => item === '' || (typeof item === 'string' && item.trim() === ''));
      } else {
      return !form3B[field] || (typeof form3B[field] === 'string' && form3B[field].trim() === '');
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
  }, [form3B]);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = '';

    switch (name) {
      case 'H3B10':
        error = validateName(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = form3B[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      case 'H3B2':
      case 'H3B4':
      case 'H3B5':
      case 'H3B6':
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = form3B[name];
          e.preventDefault();
        }
        break;
      default:
        break;
    }

    setForm3B(prevValue => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case 'H3B2':
      case 'H3B4':
      case 'H3B5':
      case 'H3B6':
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
                    <SidePanel id={"2"} />
                    <div className="grayedover" onClick={toggleSidebar}></div>
                </>
                )}
        <div className="siteInfo">

          <div className="formhdr">
            <div>
              <h3>
                3B. Infrastructure
              </h3>
            </div>
          </div>

          <div className="formcontent">

            <Radio byDefault={form3B.H3B1} onClick={handleChange(setForm3B)} name="H3B1" h3="3B.1 : Is the PHC 24/7 open?" CheckbobItems={["Yes", "No"]} />

            <InputField value={form3B.H3B2} name="H3B2" h3="3B.2 : How many observation beds are available in the PHC?" placeholder="Type here" onChange={handleChangeWithValidation}
              required
              errorMsg={errors.H3B2} />

            <Radio byDefault={form3B.H3B3} onClick={handleChange(setForm3B)} name="H3B3" h3="3B.3 : Are dedicated beds present for emergency care?" CheckbobItems={["Yes", "No"]} />

            {
              (form3B.H3B3 === 'Yes') &&
              <>
                <InputField value={form3B.H3B4} onChange={handleChangeWithValidation} name="H3B4" h3="3B.4 : How many beds are earmarked for emergency care?" placeholder="Type here" errorMsg={errors.H3B4} />
              </>
            }

            <InputField value={form3B.H3B5} onChange={handleChangeWithValidation} name="H3B5" h3="3B.5 : What is the average number of patients presenting to OPD in a day/ everyday?" placeholder="Type here" required
              errorMsg={errors.H3B5} />

            <InputField value={form3B.H3B6} onChange={handleChangeWithValidation} name="H3B6" h3="3B.6 : What is the average daily number of patients presenting with emergency conditions?" p="(Chest pain, stroke, acute weakness, acute blindness, Shortness of breath, altered mentation, snake bite, bites, road traffic accident, injuries, poisoning, deliberate self-harm, infectious diseases, fever, pregnancy related, seizure, acute abdomen, anaphylaxis, cerebro-meningeal infections, foreign body, acute pulmonary disease, Shock, accidental injuries, infections)" placeholder="Type here" required
              errorMsg={errors.H3B6} />

            <Checkbox setFunction={setForm3B} StateValue={form3B} array={form3B.H3B7} name="H3B7" h3="3B.7 : Which of the following infrastructure requirements for emergency are available at the PHC? (Multiple answers possible)" CheckbobItems={["Emergency Registration Counter", "Waiting Area for patients/attendants", "Plaster Room/Suturing Room/Minor OT", "Point of Care Lab", "Area to Keep Dead Bodies", "Demarcate Duty Rooms for Doctors and Nurses", " Computerized Registration", "Triage Area", "Resuscitation Area", "Decontamination Facility", "Security Services", "Designated Parking Area for Ambulance", "Wheelchair Trolley and Stretcher Bay", " IT infrastructure for providing teleconsultation services", "Adequate illumination at the entrance & access road to PHC at night.", "Availability of Wheelchair or stretcher", "Ward is easily accessible from the OPD"]} errorMsg={errors.H3B7} />

            <Checkbox setFunction={setForm3B} StateValue={form3B} array={form3B.H3B8} name="H3B8" h3="3B.8 : Which of these signage or display boards of the emergency services and entitlements available in its departments?"
              CheckbobItems={["Services Provided Clearly Defined and Displayed, displayed prominently.", "The name of the facility is prominently displayed in front of the hospital building", "Display of citizen’s charter", "Direction to PHC is displayed from the Access Road.", "Facility layout with Directions to different departments displayed.", " Name of the facility is prominently displayed in front of the hospital building.", "All functional areas identified by their respective signage.", "Availability of complaint box and display of process for grievance re-addressed and whom to contact is displayed"]}
              errorMsg={errors.H3B8} />

            <Radio byDefault={form3B.H3B9} onClick={handleChange(setForm3B)} name="H3B9" h3="3B.9 : Does this facility provide ambulance services?" CheckbobItems={["Yes", "No"]} />

            {
              (form3B.H3B9 === 'No') &&
              <>
                <InputField value={form3B.H3B10} onChange={handleChangeWithValidation} name="H3B10" h3="3B.10 : If ambulances are not there, how are patients transferred? " placeholder="Type here" errorMsg={errors.H3B10} />
              </>
            }


            <div className="button-container">
              <Buttons formName="form3b" formData={form3B} prevText="Previous" nextText="Save & Next" prev="/facilityinformation-3" next="/humanresources-3" />

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

export default Form3B
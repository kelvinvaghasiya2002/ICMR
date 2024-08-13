import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Checkbox from "../child-comp/Checkbox";
import SidePanel from "./SidePanelHFAT1";
import Buttons from "../child-comp/Buttons";
import Radio from "../child-comp/Radio";
import InputField from "../child-comp/InputField";
import C1 from "../Tables/C1.jsx";
import { handleChange, turnOffbutton } from "../helpers";
import setLocalStorage from "../setLocalStorage.js";
import Heading from "../../Heading/Heading.jsx";
import { validateName, validateNumber, validateRequired, validateEmail, validateCheckBox } from '../fv.js';
import OverlayCard from '../OverlayCard.jsx';

function FormC() {
  const formc = setLocalStorage("formc", {
    C2a: [],
    C2b: [],
    C3: "",
    C4: [""],
    C5: "",
    C6: "",
  });
  const [formC, setFormC] = useState(JSON.parse(formc));
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);

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

  useEffect(() => {
    if (formC.C3 === "No") {
      setFormC((prevValue) => {
        return {
          ...prevValue,
          C4: [""],
          C5: "",
        };
      });
    }
  }, [formC.C3]);

  turnOffbutton();

  const columns = [
    { key: "Manpower", label: "Manpower", type: "text" },
    { key: "Number", label: "Number", type: "input" },
    {
      key: "availability247",
      label: "24/7 Availability",
      type: "radio",
      options: ["Yes", "No"],
    },
    {
      key: "onSiteAvailability",
      label: "On-site Availability",
      type: "radio",
      options: ["Yes", "No"],
    },
    {
      key: "onCallAvailability",
      label: "On-call Availability",
      type: "radio",
      options: ["Yes", "No"],
    },
  ];

  const labels = [
    "Faculty/Consultant",
    "CMO (casualty medical officer)",
    "SR (Senior Residents)",
    "JR (Junior Residents)",
    "MO (Medical officer)",
    "Nursing officer in charge / Team leader",
    "Staff Nurse/ Nursing Officer",
    "Radiology technician/ Radiographer",
    "Lab Technician",
    "OT. Technician",
    "H.A/ GDA/ Orderly (GDA)General Duty Assistant, SA- Sanitary Attendant, HA- Hospital Attendant",
    "SA/ Housekeeping staff",
    "EMT",
    "Security",
    "Registration staff",
    "IT Staff",
    "Hospital Administrator",
    "Pharmacist",
    "Other",
  ];

  const initialRows = labels.map((label) => {
    if (label === "Other") {
      return {
        Manpower: "",
        otherSpecify: "",
        Number: "",
        availability: "",
        onSite: "",
        onCall: "",
      };
    } else {
      return {
        Manpower: "",
        Number: "",
        Availability: "",
        OnSite: "",
        OnCall: "",
      };
    }
  });

  const validateForm = () => {
    // const newErrors = { ...errors };
    const newErrors = {};



    // if (formC.C2a.length === 0) {
    //   newErrors.C2a = "Select at least one option";
    // } else {
    //   delete newErrors.C2a; // Remove error if there's a selection
    // }

    // if (formC.C2b.length === 0) {
    //   newErrors.C2b = "Select at least one option";
    // } else {
    //   delete newErrors.C2b; // Remove error if there's a selection
    // }

    // setErrors(newErrors);

    // // Check if there are no errors to allow navigation
    // return Object.keys(newErrors).length === 0;

    if(!formC.C3) newErrors.C3 = ' Whether training for emergency care management is being conducted for the staff in the institution is required'

    if(formC.C3 === "Yes" && !formC.C4 && !formC.C5){
      newErrors.C4 = validateRequired(formC.C4);
      newErrors.C4 = 'Fill the emergency care trainings you have undergone';
      newErrors.C5 = validateRequired(formC.C5);
      newErrors.C5 = 'Frequency of trainig is required';

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
        if(Array.isArray(formC[field])){
          console.log(formC[field]);
          newErrors[field] = validateCheckBox(formC[field]);
        }else{
          newErrors[field] = validateRequired(formC[field]);
        }
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [formC]);

  const isFormValid = () => {
    const requiredFields = ['C2a', 'C2b', 'C3', 'C6'];
    if (formC.C3 === "Yes") {
      requiredFields.push('C4');
      requiredFields.push('C5');
    }

    const missingFields = requiredFields.filter(field => {
      if (Array.isArray(formC[field])) {
      return formC[field].every(item => item === '' || (typeof item === 'string' && item.trim() === ''));
      } else {
      return !formC[field] || (typeof formC[field] === 'string' && formC[field].trim() === '');
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
  }, [formC]);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = '';

    switch (name) {
      case 'C6':
        error = validateName(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formC[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      default:
        break;
    }

    setFormC(prevValue => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case 'C6':
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
            <SidePanel id={"3"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"3"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>1C. Human Resources</h3>
            </div>
          </div>

          <div className="formcontent">
            <h3>
              1C.1 : Tick the manpower available in your emergency department
              and provide numbers
            </h3>

            <C1
              columns={columns}
              initialRows={initialRows}
              labels={labels}
              tableName={"C1"}
            />

            <h3>
              1C.2 : Please indicate which of the following specialist/super
              specialist services are available in your hospital
            </h3>

            <Checkbox
              h3="District Hospital + Medical College"
              CheckbobItems={[
                "Medicine",
                "Gynecology and obstetrics",
                "Orthopedics",
                "General surgery",
                "Radiology",
                "Anesthesia",
                "Critical care",
                "Ophthalmology",
                "ENT",
                "Psychiatry",
                "Dermatology",
                "Forensic medicine",
              ]}
              name="C2a"
              setFunction={setFormC}
              StateValue={formC}
              array={formC.C2a}
              // required={true}
              errorMsg={errors.C2a}
            />

            <Checkbox
              h3="Medical College"
              CheckbobItems={[
                "Transfusion medicine",
                "Cardiology",
                "CTVS",
                "Neurology",
                "Neurosurgery",
                "Plastic surgery",
                "Maxillofacial surgery",
                "Gastroenterology",
                "Nephrology",
                "Urology",
                "Pediatric surgery",
                "Emergency medicine",
              ]}
              name="C2b"
              setFunction={setFormC}
              StateValue={formC}
              array={formC.C2b}
              // required={true}
              errorMsg={errors.C2b}
            />

            <Radio
              h3="1C.3 : Whether training for emergency care management is being conducted for the staff in the institution?"
              CheckbobItems={["Yes", "No"]}
              name="C3"
              onClick={handleChange(setFormC)}
              byDefault={formC.C3}
              required
              errorMsg={errors.C3}
            />

            {formC.C3 === "Yes" && (
              <>
                <Checkbox
                  h3="1C.4 : If Yes to 1C.3, Which of the following emergency care trainings you have undergone?"
                  CheckbobItems={[
                    "Trauma & Accidental Injuries",
                    "Burns",
                    "Cardiac emergencies: acute chest pain, acute coronary syndrome (ACS)/ STEMI, Heart failure, Cardiac Arrest",
                    "Stroke",
                    "Acute Breathlessness",
                    "Bites (Animal bite/snake bite/scorpion sting)",
                    "Choking/foreign body ingestion",
                    "Poisoning",
                    "PPH",
                    "Pre-Eclampsia",
                    "Neonatal emergencies",
                  ]}
                  other={true}
                  name="C4"
                  setFunction={setFormC}
                  StateValue={formC}
                  array={formC.C4}
                  // required={true}
                  errorMsg={errors.C4}
                />

                <Radio
                  h3="1C.5 : If Yes, Frequency of training on emergency care in a year?"
                  CheckbobItems={[
                    "Every Month",
                    "Quarterly",
                    "Half Yearly",
                    "Annually",
                    "Others(Specify)",
                  ]}
                  otherArray={[0, 0, 0, 0, 1]}
                  name="C5"
                  // setter={setFormC}
                  onClick={handleChange(setFormC)}
                  byDefault={formC.C5}
                  // required={true}
                  errorMsg={errors.C5}
                />
              </>
            )}

            <InputField
              name="C6"
              h3="1C.6 : When was the last training conducted ? "
              placeholder="Type here"
              value={formC.C6}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.C6}
            />

<div className="button-container">
<Buttons
              formName={"formc"}
              formData={formC}
              prevText="Previous"
              nextText="Save & Next"
              prev="/infrastructure"
              next="/logisticsdrugsconsumablesequipment-1"
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

export default FormC;

import React, { useEffect, useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import C1 from '../Tables/C1.jsx'
import { turnOffbutton, handleChange } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';
import { validateName, validateNumber, validateRequired, validateEmail, validateCheckBox } from '../fv.js';
import OverlayCard from '../OverlayCard.jsx';


function Form3C() {
  turnOffbutton();
  var form3c = setLocalStorage("form3c", { H3C2: "", H3C3: [""], H3C4: "", H3C5: "" })
  const [form3C, setForm3C] = useState(JSON.parse(form3c))
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
    if (form3C.H3C2 === "No") {
      setForm3C((prevValue) => {
        return { ...prevValue, H3C3: [""], H3C4: "", H3C5: "" }
      })
    }
  }, [form3C.H3C2])

  const columns = [
    { key: 'Manpower', label: 'Manpower', type: 'text' },
    { key: 'Number', label: 'Number', type: 'input' },
    { key: 'availability247', label: '24/7 Availability', type: 'radio', options: ['Yes', 'No'] },
    { key: 'onSiteAvailability', label: 'On-site Availability', type: 'radio', options: ['Yes', 'No'] },
    { key: 'onCallAvailability', label: 'On-call Availability', type: 'radio', options: ['Yes', 'No'] }
  ];

  const labels = [
    'MO MBBS',
    'Specialist for Medicine*',
    'Specialist for Pediatrics*',
    'Specialist for Ophthalmology*',
    'Specialist Obstetrics & Gynecologist*',
    'Staff Nurses',
    'Pharmacist',
    'Lab Technician',
    'Dressor',
    'Data entry operator',
    'Sanitation staff',
    'Other',
  ];

  // const initialRows = [
  //   { Manpower: '', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  //   { Manpower: '', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  //   { Manpower: '', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  //   { Manpower: '', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  //   { Manpower: '', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  //   { Manpower: '', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  //   { Manpower: '', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  //   { Manpower: '', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  //   { Manpower: '', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  //   { Manpower: '', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  //   { Manpower: '', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  //   { Manpower: '', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  // ]

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
    const newErrors = {};

    if (!form3C.H3C2) newErrors.C2 = ' Whether training for emergency care management is being conducted for the staff in the institution is required'

    if (form3C.H3C2 === "Yes" && !form3C.H3C4 && !form3C.H3C5) {
      newErrors.H3C4 = validateRequired(form3C.H3C4);
      newErrors.H3C4 = 'Frequency of training on emergency care in a year is required';
      newErrors.H3C5 = validateRequired(form3C.H3C5);
      newErrors.H3C5 = 'Required to fill last training conducted';

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
        if(Array.isArray(form3C[field])){
          console.log(form3C[field]);
          newErrors[field] = validateCheckBox(form3C[field]);
        }else{
          newErrors[field] = validateRequired(form3C[field]);
        }
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [form3C]);

  const isFormValid = () => {
    const requiredFields = ['H3C2'];
    if (form3C.H3C2 === "Yes") {
      requiredFields.push('H3C3');
      requiredFields.push('H3C4');
      requiredFields.push('H3C5');
    }

    const missingFields = requiredFields.filter(field => {
      if (Array.isArray(form3C[field])) {
      return form3C[field].every(item => item === '' || (typeof item === 'string' && item.trim() === ''));
      } else {
      return !form3C[field] || (typeof form3C[field] === 'string' && form3C[field].trim() === '');
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
  }, [form3C]);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = '';

    switch (name) {
      case 'H3C5':
        error = validateName(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = form3C[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      default:
        break;
    }

    setForm3C(prevValue => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case 'H3C5':
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
                    <SidePanel id={"3"} />
                    <div className="grayedover" onClick={toggleSidebar}></div>
                </>
                )}
        <div className="siteInfo">

          <div className="formhdr">
            <div>
              <h3>
                3C. Human Resources
              </h3>
            </div>
          </div>

          <div className="formcontent">
            <h3>3C.1 : Tick the manpower available in your emergency department and provide numbers</h3>
            <C1 columns={columns} initialRows={initialRows} tableName={"H3C1"} labels={labels} />
            <span style={{ fontSize: "1vw" }}>*1 Specialists are on rotation basis at polyclinics as per IPHS guideline for PHCs.</span>

            <Radio h3="3C.2 : Whether training for emergency care management is being conducted for the staff in the institution?" CheckbobItems={["Yes", "No"]} name="H3C2" onClick={handleChange(setForm3C)} byDefault={form3C.H3C2}
              errorMsg={errors.H3C2}
              required />

            {
              (form3C.H3C2 === 'Yes') &&
              <>
                <Checkbox CheckbobItems={["Trauma & Accidental Injuries",
                  "Burns",
                  "Cardiac emergencies: acute chest pain, acute coronary syndrome (ACS)/ STEMI, Heart failure, Cardiac Arrest",
                  "Stroke",
                  "Acute Breathlessness",
                  "Seizures",
                  " Bites (Animal bite/snake bite/scorpion sting)",
                  "Choking/foreign body ingestion",
                  "Poisoning",
                  "PPH",
                  "Pre-Eclampsia",
                  "Neonatal emergencies"]} name="H3C3" h3="3C.3 : If Yes to 3C.2, Which of the following emergency care trainings you have undergone?" other={true} setFunction={setForm3C} StateValue={form3C} array={form3C.H3C3} />

                <Radio CheckbobItems={["Every Month",
                  "Quarterly",
                  "Half Yearly",
                  "Annually",
                  "Others (Specify)"]} setter={setForm3C} otherArray={[0, 0, 0, 0, 1]} name="H3C4" h3="3C.4 : If Yes, Frequency of training on emergency care in a year?" other={true} byDefault={form3C.H3C4} onClick={handleChange(setForm3C)} errorMsg={errors.H3C4} />

                <InputField h3="3C.5 : When was the last training conducted?" placeholder="Type here" value={form3C.H3C5} name={"H3C5"} onChange={handleChangeWithValidation} errorMsg={errors.H3C5} />
              </>
            }

            <div className="button-container">
              <Buttons formName={"form3c"} formData={form3C} prevText="Previous" nextText="Save & Next" prev="/infrastructure-3" next="/logistics-3" />

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

export default Form3C
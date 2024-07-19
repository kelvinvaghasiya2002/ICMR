import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import C1 from '../Tables/C1.jsx';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from "../setLocalStorage.js";
import Heading from '../../Heading/Heading.jsx';

function FormC() {

  const formc = setLocalStorage("formc", { C2a: [], C2b: [], C3: "", C4: [""], C5: "", C6: "" });
  const [formC, setFormC] = useState(JSON.parse(formc));
  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);

  useEffect(()=>{
    if(formC.C3 === "No"){
      setFormC((prevValue)=>{
        return{
          ...prevValue,
          C4: [""], 
          C5: ""
        }
      })
    }
  },[formC.C3])

  turnOffbutton();

  const columns = [
    { key: 'Manpower', label: 'Manpower', type: 'text' },
    { key: 'Number', label: 'Number', type: 'input' },
    { key: 'availability247', label: '24/7 Availability', type: 'radio', options: ['Yes', 'No'] },
    { key: 'onSiteAvailability', label: 'On-site Availability', type: 'radio', options: ['Yes', 'No'] },
    { key: 'onCallAvailability', label: 'On-call Availability', type: 'radio', options: ['Yes', 'No'] }
  ];

  const initialRows = [
    { Manpower: 'Faculty/Consultant', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'CMO (casualty medical officer)', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'SR (Senior Residents)', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'JR (Junior Residents)', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'MO (Medical officer)', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'Nursing officer in charge / Team leader', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'Staff Nurse/ Nursing Officer', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'Radiology technician/ Radiographer', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'Lab Technician', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'OT. Technician', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'H.A/ GDA/ Orderly (GDA)General Duty Assistant, SA- Sanitary Attendant, HA- Hospital Attendant', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'SA/ Housekeeping staff', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'EMT', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'Security', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'Registration staff', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'IT Staff', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'Hospital Administrator', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'Pharmacist', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  
    { Manpower: 'Other', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' }
  ];

  const validateForm = () => {
    const newErrors = { ...errors };

    if (formC.C2a.length === 0) {
      newErrors.C2a = "Select at least one option";
    } else {
      delete newErrors.C2a; // Remove error if there's a selection
    }

    if (formC.C2b.length === 0) {
      newErrors.C2b = "Select at least one option";
    } else {
      delete newErrors.C2b; // Remove error if there's a selection
    }

    setErrors(newErrors);

    // Check if there are no errors to allow navigation
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)"></Heading>
      <section>
        <SidePanel id={"3"} />
        <div className="siteInfo" data-aos="fade-left" >

          <div className="formhdr">
            <div>
              <h3>
                1C. Human Resources
              </h3>
            </div>
          </div>

          <div className="formcontent">
            <h3>1C.1 : Tick the manpower available in your emergency department and provide numbers</h3>

            <C1 columns={columns} initialRows={initialRows} tableName={"C1"} />

            <h3>1C.2 : Please indicate which of the following specialist/super specialist services are available in your hospital</h3>

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
                "Forensic medicine"
              ]}
              name="C2a"
              setFunction={setFormC} StateValue={formC} array={formC.C2a}
              required={true}
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
                "Emergency medicine"
              ]}
              name="C2b"
              setFunction={setFormC} StateValue={formC} array={formC.C2b}
              required={true}
              errorMsg={errors.C2b}
            />

            <Radio
              h3="1C.3 : Whether training for emergency care management is being conducted for the staff in the institution?"
              CheckbobItems={["Yes", "No"]}
              name="C3"
              onClick={handleChange(setFormC)}
              byDefault={formC.C3}
              required={true}
              errorMsg={errors.C3}
            />

            {
              (formC.C3 === "Yes") &&
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
                    "Neonatal emergencies"
                  ]}
                  other={true}
                  name="C4"
                  setFunction={setFormC} StateValue={formC} array={formC.C4}
                  required={true}
                  errorMsg={errors.C4}
                />

                <Radio
                  h3="1C.5 : If Yes, Frequency of training on emergency care in a year?"
                  CheckbobItems={[
                    "Every Month",
                    "Quarterly",
                    "Half Yearly",
                    "Annually",
                    "Others(Specify)"
                  ]}
                  otherArray={[0, 0, 0, 0, 1]}
                  name="C5"
                  setter={setFormC}
                  onClick={handleChange(setFormC)}
                  byDefault={formC.C5}
                  required={true}
                  errorMsg={errors.C5}
                />
              </>
            }

            <InputField name="C6" h3="1C.6 : When was the last training conducted ? " placeholder="Type here" value={formC.C6} onChange={handleChange(setFormC)} required={true}
              errorMsg={errors.C6}/>

            <Buttons formName={"formc"} formData={formC} prevText="Previous" nextText="Save & Next" prev="/infrastructure" next="/logisticsdrugsconsumablesequipment-1" validateForm={validateForm} />
            {Object.keys(errors).length > 0 && (
              <div className="error-msg">
                Please fill out all required fields before proceeding.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormC;




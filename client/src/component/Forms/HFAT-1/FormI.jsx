import React, { useState,useEffect } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import I2 from "../Tables/I1.jsx"
import { turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';
import AOS from 'aos'
import 'aos/dist/aos.css'

function FormI() {

  useEffect(()=> {
    AOS.init({duration:2000})
}, []);
  var formi = setLocalStorage('formi' , {I1 : []});
  const [formI , setFormI] = useState(JSON.parse(formi));
  const [errors, setErrors] = useState({});
  turnOffbutton();

  const validateForm = () => {
    const newErrors = {};

    if (formI.I1.length === 0) {
      newErrors.I1 = "Select at least one option";
    }
    if (!validateI2Table()) {
      newErrors.I2 = "Please fill out all rows in the table";
    }

    setErrors(newErrors);
    console.log("Validation Errors:", newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateI2Table = () => {
    return formI.I2.every(row => row.SOP && row.FollowsSOP);
  };

  const columns = [
    { key: 'EmergencyCondition', label: 'Emergency Condition', type: 'text' },
    { key: 'SOP', label: 'Have Specific SOP/STW', type: 'radio', options: ['Yes', 'No'] },
    { key: 'FollowsSOP', label: 'Follows SOP', type: 'radio', options: ['Yes', 'No'] },
];

// Define the initial rows
const initialRows = [
    { EmergencyCondition: 'MI', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Stroke', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Trauma & Burns', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Poisoning', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Snake Bite', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Maternal Emergencies-PPH', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Maternal Emergencies- Eclampsia', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Neonatal Emergencies', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Acute Respiratory Illness', SOP: '', FollowsSOP: '' },
];

  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)"></Heading>
    <section>
      <SidePanel id={"9"} />
      <div className="siteInfo" data-aos="fade-left">

        <div className="formhdr">
          <div>
            <h3>
              1I. Process/ Policies/SOPs
            </h3>
          </div>
        </div>

        <div className="formcontent">

          <Checkbox h3="1I.1 : Indicate whether your hospital has the following documented protocols and systems (Select all that apply):" CheckbobItems={["Procedure for registration and admission of new emergency patients", "Procedure/Policy for receiving of referral patients", "Emergency Manual at the point of care", "Triage guidelines and protocol.", "Discharge summaries for all patients.", "Policy on handling cases of death (outside and inside hospital).", "Disaster management plan", "Triage policy/system at your emergency department.", "Alert system: Code Blue.", "Alert system: Trauma.", "Alert system: Chest Pain", "Alert system: Sepsis.", "Alert system: Stroke", "Alert system: Maternal Emergencies", "Alert system: Neonatal Emergencies", "Alert system: Acute Respiratory Emergencies", "Alert system: Snake bite and Poisoning"]} name="I1" setFunction={setFormI} StateValue={formI} array={formI.I1} errorMsg={errors.I1}
              required={true}  />

          <h3>1I.2 : Whether having Emergency condition specific SOP/STW for emergency care? </h3>

          <I2 columns={columns} initialRows={initialRows} tableName="I2" />

          <Buttons formName={"formi"} formData={formI} prevText="Previous" nextText="Save & Next" prev="/leadershipandgovernance" next="/referrallinkages" />
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

export default FormI
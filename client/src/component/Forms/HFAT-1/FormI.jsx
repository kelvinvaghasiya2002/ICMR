import React, { useState, useEffect } from 'react';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import I2 from "../Tables/I1.jsx";
import { turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OverlayCard from '../OverlayCard.jsx';
import { validateCheckBox, validateRequired } from '../fv.js';

function FormI() {

  
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

  const formi = setLocalStorage('formi', { I1: [], I2: [] });
  const [formI, setFormI] = useState(JSON.parse(formi));
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);
  
  turnOffbutton();

  const validateForm = () => {
    const newErrors = {};

    // Validate I1
    if (formI.I1.length === 0) {
      newErrors.I1 = "Select at least one option";
    }

    // Validate I2
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

    useEffect(() => {
      const { isValid, missingFields } = isFormValid();
      setShowOverlay(!isValid);
      if (!isValid) {
        const newErrors = {};
        missingFields.forEach(field => {
          console.log(field + "field");
          if(Array.isArray(formI[field])){
            console.log(formI[field]);
            newErrors[field] = validateCheckBox(formI[field]);
          }else{
            newErrors[field] = validateRequired(formI[field]);
          }
        });
        setErrors(newErrors);
      } else {
        setErrors({});
      }
    }, [formI]);
  
    const isFormValid = () => {
      const requiredFields = ['I1'];

      const missingFields = requiredFields.filter(field => {
        if (Array.isArray(formI[field])) {
        return formI[field].every(item => item === '' || (typeof item === 'string' && item.trim() === ''));
        } else {
        return !formI[field] || (typeof formI[field] === 'string' && formI[field].trim() === '');
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
    }, [formI]);
  

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
            <SidePanel id={"9"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"9"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>1I. Process/ Policies/SOPs</h3>
            </div>
          </div>

          <div className="formcontent">
            <Checkbox
              h3="1I.1 : Indicate whether your hospital has the following documented protocols and systems (Select all that apply):"
              CheckbobItems={[
                "Procedure for registration and admission of new emergency patients",
                "Procedure/Policy for receiving of referral patients",
                "Emergency Manual at the point of care",
                "Triage guidelines and protocol.",
                "Discharge summaries for all patients.",
                "Policy on handling cases of death (outside and inside hospital).",
                "Disaster management plan",
                "Triage policy/system at your emergency department.",
                "Alert system: Code Blue.",
                "Alert system: Trauma.",
                "Alert system: Chest Pain",
                "Alert system: Sepsis.",
                "Alert system: Stroke",
                "Alert system: Maternal Emergencies",
                "Alert system: Neonatal Emergencies",
                "Alert system: Acute Respiratory Emergencies",
                "Alert system: Snake bite and Poisoning"
              ]}
              name="I1"
              setFunction={setFormI}
              StateValue={formI}
              array={formI.I1}
              errorMsg={errors.I1}
              required={true}
            />

            <h3>1I.2 : Whether having Emergency condition specific SOP/STW for emergency care?</h3>
            <I2 columns={columns} initialRows={initialRows} tableName="I2" />

                        <div className="button-container">
            <Buttons
              formName={"formi"}
              formData={formI}
              prevText="Previous"
              nextText="Save & Next"
              prev="/leadershipandgovernance"
              next="/referrallinkages"
              formType="hfat1"
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

export default FormI;

import React, { useState, useEffect } from 'react'
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import E1 from "../Tables/E1.jsx"
import E2 from "../Tables/E2.jsx"
import Heading from '../../Heading/Heading.jsx';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Checkbox from '../child-comp/Checkbox.jsx';
import OverlayCard from '../OverlayCard.jsx';
import { validateCheckBox, validateRequired } from '../fv.js';

function Form3E() {
  turnOffbutton();
  var form3e = setLocalStorage("form3e", { H3E3: [] });
  const [form3E, setForm3E] = useState(JSON.parse(form3e));
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

  const columns2 = [
    { key: 'Type', label: 'Type', type: 'text' },
    { key: 'Attended', label: 'Attended (NA: data unavailable)', type: 'input' },
    { key: 'Death', label: 'Death (NA: data unavailable)', type: 'input' },
  ];

  // Define the initial rows
  const initialRows2 = [
    { Type: 'MI', Attended: '', Death: '' },
    { Type: 'Stroke', Attended: '', Death: '' },
    { Type: 'Trauma & Burns', Attended: '', Death: '' },
    { Type: 'Poisoning', Attended: '', Death: '' },
    { Type: 'Snake Bite', Attended: '', Death: '' },
    { Type: 'Maternal Emergencies-PPH', Attended: '', Death: '' },
    { Type: 'Maternal Emergencies- Eclampsia', Attended: '', Death: '' },
    { Type: 'Neonatal Emergencies', Attended: '', Death: '' },
    { Type: 'Acute Respiratory Illness', Attended: '', Death: '' },
  ];

  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach(field => {
        console.log(field + "field");
        if (Array.isArray(form3E[field])) {
          console.log(form3E[field]);
          newErrors[field] = validateCheckBox(form3E[field]);
        } else {
          newErrors[field] = validateRequired(form3E[field]);
        }
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [form3E]);

  const isFormValid = () => {
    const requiredFields = ['H3E3'];
    const missingFields = requiredFields.filter(field => {
      if (Array.isArray(form3E[field])) {
        return form3E[field].every(item => item === '' || (typeof item === 'string' && item.trim() === ''));
      } else {
        return !form3E[field] || (typeof form3E[field] === 'string' && form3E[field].trim() === '');
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
  }, [form3E]);

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
                    <SidePanel id={"5"} />
                    <div className="grayedover" onClick={toggleSidebar}></div>
                </>
                )}

        <div className="siteInfo">

          <div className="formhdr">
            <div>
              <h3>
                3E. Emergency Care Services
              </h3>
            </div>
          </div>

          <div className="formcontent">

            <h3>3E.1 : Numbers of Patients who Visited ED in Last One Month</h3>

            <E1 tableName={"H3E1"} />

            <h3>3E.2 : Numbers of Patients Attended in ED and Deaths in Last One Year (Jan - Dec 2023)</h3>

            <E2 columns={columns2} initialRows={initialRows2} tableName={"H3E2"} />

            <Checkbox h3="3E.3 : Which of the following emergency services are delivered at the PHC? " CheckbobItems={["Triage", "Resuscitation", "Medico Legal Reporting"]} name={"H3E3"} setFunction={setForm3E} StateValue={form3E} array={form3E.H3E3} />


            <div className="button-container">
              <Buttons formName={"form3e"} formData={form3E} prevText="Previous" nextText="Save & Next" prev="/logistics-3-1" next="/informationsystem-3"
              formType="hfat3" />

              <OverlayCard
                isVisible={showOverlay}
                message="(Please fill all required fields to proceed)"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Form3E
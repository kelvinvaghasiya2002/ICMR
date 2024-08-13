import React from 'react'
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Checkbox from '../child-comp/Checkbox';
import { useState, useEffect } from 'react';
import setLocalStorage from '../setLocalStorage';
import { turnOffbutton } from '../helpers';
import Heading from '../../Heading/Heading.jsx';
import OverlayCard from '../OverlayCard.jsx';
import { validateCheckBox, validateRequired } from '../fv.js';


function FormD() {
  turnOffbutton();
  var form3d = setLocalStorage("form3d", { H3D1: [] })
  const [form3D, setForm3D] = useState(JSON.parse(form3d))
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach(field => {
        console.log(field + "field");
        if(Array.isArray(form3D[field])){
          console.log(form3D[field]);
          newErrors[field] = validateCheckBox(form3D[field]);
        }else{
          newErrors[field] = validateRequired(form3D[field]);
        }
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [form3D]);

  const isFormValid = () => {
    const requiredFields = ['H3D1'];

    const missingFields = requiredFields.filter(field => {
      if (Array.isArray(form3D[field])) {
      return form3D[field].every(item => item === '' || (typeof item === 'string' && item.trim() === ''));
      } else {
      return !form3D[field] || (typeof form3D[field] === 'string' && form3D[field].trim() === '');
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
  }, [form3D]);



  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 3: Primary Health Centre"></Heading>
    <section>
      <SidePanel id={"4"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
            3D. Logistics (Drugs/ Consumables/ Equipment)
            </h3>
          </div>
        </div>

        <div className="formcontent">
          <h3>3D.1 : Which of the following emergency drugs are available at the PHC? (Multiple answers possible)? Please tick in the attached drug list.</h3>
          <Checkbox name="H3D1" CheckbobItems={['Oxygen medicinal gas', 'Atropine', 'Diazepam/Lorazepam', 'Adrenaline', 'Charcoal activated', 'Antisnake venom', 'Pralidoxime (PAM)', 'Magnesium sulphate', 'Tetanus immunoglobulin', 'Neostigmine', 'Aspirin', 'Clopidogrel', 'Atorvastatin', 'Misoprostol', 'Labetalol IV', 'Phenobarbitone', 'Phenytoin (inj)', 'Plasma volume expander', '3% Saline', 'Dobutamine', 'Streptokinase', 'Tenecteplase', 'Oxytocin', 'Salbutamol sulphate', 'Glucose/ 25 % dextrose', 'Tranexamic acid', 'tPA IV', 'Methergine', 'Carboprost']} setFunction={setForm3D} StateValue={form3D} array={form3D.H3D1} />


          <div className="button-container">
          <Buttons formName={"form3d"} formData={form3D} prevText="Previous" nextText="Save & Next" prev="/humanresources-3" next="/logistics-3-1" />
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

export default FormD
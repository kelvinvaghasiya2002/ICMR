import React, { useState, useEffect } from 'react';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Checkbox from '../child-comp/Checkbox';
import setLocalStorage from '../setLocalStorage';
import { turnOffbutton } from '../helpers';
import Heading from '../../Heading/Heading.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OverlayCard from '../OverlayCard.jsx';
import { validateCheckBox } from '../fv.js';

function Form2D() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();

  var form2d = setLocalStorage("form2d", { H2D1: [] });
  const [form2D, setForm2D] = useState(JSON.parse(form2d));
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach(field => {
        console.log(field + "field");
        if (Array.isArray(form2D[field])) {
          console.log(form2D[field]);
          newErrors[field] = validateCheckBox(form2D[field]);
        } else {
          newErrors[field] = validateRequired(form2D[field]);
        }
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [form2D]);

  const isFormValid = () => {
    const requiredFields = ['H2D1'];
    const missingFields = requiredFields.filter(field => {
      if (Array.isArray(form2D[field])) {
        return form2D[field].every(item => item === '' || (typeof item === 'string' && item.trim() === ''));
      } else {
        return !form2D[field] || (typeof form2D[field] === 'string' && form2D[field].trim() === '');
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
  }, [form2D]);


  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 2: Community Health Centre"></Heading>
      <section>
        <SidePanel id={"4"} />
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>2D. Logistics (Drugs/ Consumables/ Equipment)</h3>
            </div>
          </div>

          <div className="formcontent">
            <h3>2D.1 : Which of the following emergency drugs are available at the CHC? (Multiple answers possible)?</h3>
            <h3>Drug Name:</h3>
            <Checkbox
              setFunction={setForm2D}
              StateValue={form2D}
              array={form2D.H2D1}
              name="H2D1"
              CheckbobItems={[
                "Oxygen medicinal gas", "Atropine", "Diazepam/Lorazepam", "Adrenaline", "Charcoal activated",
                "Antisnake venom", "Pralidoxime (PAM)", "Magnesium sulphate", "Tetanus immunoglobulin",
                "Neostigmine", "Aspirin", "Clopidogrel", "Atorvastatin", "Misoprostol", "Labetalol IV",
                "Phenobarbitone", "Phenytoin (inj)", "Plasma volume expander", "3% Saline", "Dobutamine",
                "Streptokinase", "Tenecteplase", "Oxytocin", "Salbutamol sulphate", "Glucose/ 25 % dextrose",
                "Tranexamic acid", "tPA IV", "Methergine", "Carboprost"
              ]}
              required={true}
              errorMsg="Select at least one drug"
            />


            <div className="button-container">
              <Buttons
                formName="form2d"
                formData={form2D}
                prevText="Previous"
                nextText="Save & Next"
                prev="/humanresources-2"
                next="/logistics-2-1"
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

export default Form2D;

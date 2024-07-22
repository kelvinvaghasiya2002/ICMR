import React, { useState, useEffect } from 'react';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Checkbox from '../child-comp/Checkbox';
import setLocalStorage from '../setLocalStorage';
import { turnOffbutton } from '../helpers';
import Heading from '../../Heading/Heading.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Form2D() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();

  var form2d = setLocalStorage("form2d", { H2D1: [] });
  const [form2D, setForm2D] = useState(JSON.parse(form2d));
  const [formError, setFormError] = useState("");

  const validateForm = () => {
    if (form2D.H2D1.filter(item => item !== "").length === 0) {
      setFormError("Select at least one drug option");
      return false;
    }
    setFormError("");
    return true;
  };

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

            {formError && <p className="error-msg">{formError}</p>}

            <Buttons 
              formName="form2d" 
              formData={form2D} 
              prevText="Previous" 
              nextText="Save & Next" 
              prev="/humanresources-2" 
              next="/logistics-2-1" 
              validateForm={validateForm}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form2D;

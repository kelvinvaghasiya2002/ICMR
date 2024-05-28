import React, { useState } from 'react'
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Checkbox from '../child-comp/Checkbox';
import setLocalStorage from '../setLocalStorage';

function Form2D() {

  var form2d = setLocalStorage("form2d" , {H2D1:[]});
  const [form2D , setForm2D] = useState(JSON.parse(form2d));

  return (
    
    <section>
      <SidePanel id={"4"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Logistics (Drugs/ Consumables/ Equipment)
            </h3>
          </div>
        </div>

        <div className="formcontent">
          <h3>Which of the following essential emergency drugs are available at the DH/ Tertiary Care Hospital?
            (Multiple answers possible)?</h3>
          

          <Checkbox CheckbobItems={['Oxygen medicinal gas', 'Atropine', 'Diazepam/Lorazepam', 'Adrenaline', 'Charcoal activated', 'Antisnake venom', 'Pralidoxime (PAM)', 'Magnesium sulphate', 'Tetanus immunoglobulin', 'Neostigmine', 'Aspirin', 'Clopidogrel', 'Atorvastatin', 'Misoprostol', 'Labetalol IV', 'Phenobarbitone', 'Phenytoin (inj)', 'Plasma volume expander', '3% Saline', 'Dobutamine', 'Streptokinase', 'Tenecteplase', 'Oxytocin', 'Salbutamol sulphate', 'Glucose/ 25 % dextrose', 'Tranexamic acid', 'tPA IV', 'Methergine', 'Carboprost']
          } name="H2D1" setFunction={setForm2D} StateValue={form2D} array={form2D.H2D1}  />

          <Buttons formName={"form2d"} formData={form2D} prev="/humanresources-2" next="/logistics-2-1" />

        </div>
      </div>
    </section>
  )
}

export default Form2D
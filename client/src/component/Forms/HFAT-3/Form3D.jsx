import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Checkbox from '../child-comp/Checkbox';
import { useState } from 'react';
import setLocalStorage from '../setLocalStorage';
import { turnOffbutton } from '../helpers';
import Heading from '../../Heading/Heading.jsx';


function FormD() {

  useEffect(()=> {
    AOS.init({duration:2000})
}, []);

  turnOffbutton();
  var form3d = setLocalStorage("form3d", { H3D1: [] })
  const [form3D, setForm3D] = useState(JSON.parse(form3d))


  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 3: Primary Health Centre"></Heading>
    <section>
      <SidePanel id={"4"} />
      <div className="siteInfo" data-aos="fade-left" >

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

          <Buttons formName={"form3d"} formData={form3D} prevText="Previous" nextText="Save & Next" prev="/humanresources-3" next="/logistics-3-1" />

        </div>
      </div>
    </section>
    </div>
  )
}

export default FormD
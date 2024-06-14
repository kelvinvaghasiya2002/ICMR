import React, { useState } from 'react'
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import E1 from "../Tables/E1.jsx"
import E2 from "../Tables/E2.jsx"
import Heading from '../../Heading/Heading.jsx';

import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';

function Form3E() {
  turnOffbutton();
  var form3e = setLocalStorage("form3e",{H3E3 : ""});
  const [form3E , setForm3E] = useState(JSON.parse(form3e));

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
  
  return (
    <div>
      <Heading h2="HFAT: PHC"></Heading>
    <section>
      <SidePanel id={"5"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Emergency Care Services
            </h3>
          </div>
        </div>

        <div className="formcontent">

          <h3>Numbers of Patients who Visited ED in Last One Month</h3>

          <E1 tableName={"H3E1"}  />

          <h3>Numbers of Patients Attended in ED and Deaths in Last One Year (Jan - Dec 2023)</h3>

          <E2 columns={columns2} initialRows={initialRows2} tableName={"H3E2"} />

          <Radio h3="Which of the following emergency services are delivered at the PHC? " CheckbobItems={["Triage", "Resuscitation", "Medico Legal Reporting"]} name={"H3E3"} onClick={handleChange(setForm3E)} byDefault={form3E.H3E3} />

          <Buttons formName={"form3e"} formData={form3E} prev="/logistics-3-1" next="/informationsystem-3" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Form3E
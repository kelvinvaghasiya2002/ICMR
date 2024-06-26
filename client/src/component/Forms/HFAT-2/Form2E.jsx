import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import E1 from '../Tables/E1';
import E2 from '../Tables/E2';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';

function Form2E() {

  var form2e = setLocalStorage("form2e" , {H2E3:[]});
  const [form2E , setForm2E] = useState(JSON.parse(form2e));

  turnOffbutton();


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
      <Heading h2="Health Facility Assessment Tool 2: Community Health Centre"></Heading>
    <section>
      <SidePanel id={"5"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              2E. Emergency Care Services
            </h3>
          </div>
        </div>

        <div className="formcontent">

          <h3>2E.1 : Numbers of Patients who Visited ED in Last One Month</h3>

          <E1 tableName={"H2E1"} />

          <h3>2E.2 : Numbers of Patients Attended in ED and Deaths in Last One Year (Jan - Dec 2023)</h3>

          <E2 columns={columns2} initialRows={initialRows2} tableName={"H2E2"} />

          <Checkbox h3="2E.3 : Which of the following emergency services are delivered at the CHC? " CheckbobItems={["Triage", "Resuscitation", "Medico Legal Reporting"]} name={"H2E3"} setFunction={setForm2E} StateValue={form2E} array={form2E.H2E3}  />

          <Buttons formName={"form2e"} formData={form2E} prevText="Previous" nextText="Save & Next" prev="/logistics-2-1" next="/informationsystem-2" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Form2E